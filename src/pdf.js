import PDFDocument from 'pdfkit';

/**
 * Format tanggal Indonesia: "25 Nov 2026"
 */
function formatDateId(dateStr) {
  if (!dateStr) return '-';
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
  } catch {
    return dateStr;
  }
}

/**
 * Generate PDF Buffer untuk Surat Bukti Peminjaman Barang Inventaris
 * Format resmi sesuai standar Form Peminjaman Alat Ruangan
 */
export function generateLoanPdfBuffer(loan, rtName = 'RT 07') {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({
        size: 'A4',
        margin: 40,
        info: {
          Title: `Form Peminjaman - ${loan.borrowerName} (${loan.assetName})`,
          Author: `Sistem Kas & Inventaris ${rtName}`,
          Subject: 'Form Bukti Peminjaman Barang Inventaris',
        },
      });

      const buffers = [];
      doc.on('data', (chunk) => buffers.push(chunk));
      doc.on('end', () => resolve(Buffer.concat(buffers)));
      doc.on('error', (err) => reject(err));

      const rawId = String(loan.id || '');
      const cleanId = rawId.includes('-')
        ? rawId.split('-')[0].toUpperCase()
        : rawId.padStart(4, '0');
      const year = new Date().getFullYear();
      const docNumber = `PM-${cleanId} / RT07 / ${year}`;
      const isActive = loan.status === 'dipinjam';
      const docDate = formatDateId(new Date().toISOString().slice(0, 10));

      const pageWidth = 595.28;
      const leftMargin = 40;
      const rightMargin = 555.28;
      const contentWidth = rightMargin - leftMargin; // 515.28 pt

      // 1. KOP SURAT
      doc.font('Helvetica-Bold').fontSize(14).text(`${rtName} RW 03 KELURAHAN / DESA`, leftMargin, 40, {
        align: 'center',
        width: contentWidth,
      });

      doc.font('Helvetica').fontSize(9).fillColor('#333333').text('SISTEM ADMINISTRASI KAS & PENGELOLAAN INVENTARIS WARGA', leftMargin, 58, {
        align: 'center',
        width: contentWidth,
      });

      // Garis Ganda Pembatas Kop
      const lineY = 74;
      doc.lineWidth(2).strokeColor('#000000').moveTo(leftMargin, lineY).lineTo(rightMargin, lineY).stroke();
      doc.lineWidth(0.8).moveTo(leftMargin, lineY + 3.5).lineTo(rightMargin, lineY + 3.5).stroke();

      // 2. JUDUL DOKUMEN RESMI
      doc.font('Helvetica-Bold').fontSize(12).fillColor('#000000').text('FORM PEMINJAMAN ALAT RUANGAN / INVENTARIS', leftMargin, 92, {
        align: 'center',
        width: contentWidth,
      });

      doc.font('Helvetica').fontSize(9).fillColor('#333333').text(`Nomor: ${docNumber}`, leftMargin, 108, {
        align: 'center',
        width: contentWidth,
      });

      // 3. IDENTITAS PEMINJAM
      doc.font('Helvetica').fontSize(10).fillColor('#000000').text('Yang bertanda tangan di bawah ini :', leftMargin, 130);

      const idRows = [
        ['Nama', loan.borrowerName || '-'],
        ['Unit / Status', loan.borrowerContact || 'Warga RT 07'],
        ['Kegunaan', loan.purpose || '-'],
        ['Tanggal Pinjam', formatDateId(loan.loanDate)],
        ['Batas Pengembalian', loan.expectedReturnDate ? formatDateId(loan.expectedReturnDate) : 'Sesuai kesepakatan'],
        ['Ruangan / Lokasi', rtName],
      ];

      let idY = 148;
      idRows.forEach(([lbl, val]) => {
        doc.font('Helvetica').fontSize(9.5).fillColor('#111111').text(lbl, leftMargin + 10, idY, { width: 120 });
        doc.text(':', leftMargin + 130, idY);
        doc.font(lbl === 'Nama' ? 'Helvetica-Bold' : 'Helvetica').text(val, leftMargin + 140, idY, { width: 360 });
        idY += 15;
      });

      // 4. TABEL PEMINJAMAN BARANG RESMI
      const tableTop = idY + 12;
      const colWidths = [25, 140, 50, 75, 75, 75, 75]; // Total = 515 pt
      const headers = ['No', 'Nama Barang', 'Jumlah', 'Tgl Pinjam', 'Tgl Kembali', 'Paraf Ambil', 'Paraf Kembali'];

      // Header background
      doc.rect(leftMargin, tableTop, contentWidth, 22).fillAndStroke('#f3f4f6', '#000000');

      // Header text
      let curX = leftMargin;
      doc.font('Helvetica-Bold').fontSize(8.5).fillColor('#000000');
      headers.forEach((h, i) => {
        doc.text(h, curX + 2, tableTop + 6, {
          width: colWidths[i] - 4,
          align: i === 1 ? 'left' : 'center',
        });
        curX += colWidths[i];
      });

      // Draw header vertical column dividers
      curX = leftMargin;
      colWidths.forEach((w) => {
        curX += w;
        doc.lineWidth(1).strokeColor('#000000').moveTo(curX, tableTop).lineTo(curX, tableTop + 22).stroke();
      });

      // Data Rows (Mendukung multiple items aset sekaligus)
      const items = Array.isArray(loan.items) && loan.items.length > 0
        ? loan.items
        : [{ assetName: loan.assetName || '-', quantity: loan.quantity || 1 }];

      let rowY = tableTop + 22;
      const rowHeight = 22;

      items.forEach((item, idx) => {
        doc.rect(leftMargin, rowY, contentWidth, rowHeight).strokeColor('#000000').stroke();

        const rowData = [
          String(idx + 1),
          item.assetName || '-',
          `${item.quantity} unit`,
          formatDateId(loan.loanDate),
          loan.expectedReturnDate ? formatDateId(loan.expectedReturnDate) : '-',
          'v Diambil',
          !isActive ? (loan.returnDate ? `Kembali (${formatDateId(loan.returnDate)})` : 'Kembali') : '-',
        ];

        let curX = leftMargin;
        doc.font('Helvetica').fontSize(8.5).fillColor('#000000');
        rowData.forEach((val, i) => {
          if (i === 1) doc.font('Helvetica-Bold');
          else doc.font('Helvetica');

          doc.text(val, curX + 2, rowY + 6, {
            width: colWidths[i] - 4,
            align: i === 1 ? 'left' : 'center',
          });
          curX += colWidths[i];
        });

        curX = leftMargin;
        colWidths.forEach((w) => {
          curX += w;
          doc.lineWidth(1).moveTo(curX, rowY).lineTo(curX, rowY + rowHeight).stroke();
        });

        rowY += rowHeight;
      });

      // Empty Rows (Baris kosong s.d. minimal 5 baris seperti form resmi blanko)
      const minRows = Math.max(5, items.length);
      for (let r = items.length + 1; r <= minRows; r++) {
        doc.rect(leftMargin, rowY, contentWidth, rowHeight).strokeColor('#000000').stroke();
        doc.font('Helvetica').fontSize(8.5).fillColor('#000000').text(String(r), leftMargin + 2, rowY + 6, {
          width: colWidths[0] - 4,
          align: 'center',
        });

        let curX = leftMargin;
        colWidths.forEach((w) => {
          curX += w;
          doc.lineWidth(1).moveTo(curX, rowY).lineTo(curX, rowY + rowHeight).stroke();
        });
        rowY += rowHeight;
      }

      // 5. NOTE (CATATAN RESMI)
      let noteY = rowY + 14;
      doc.font('Helvetica-Bold').fontSize(9).fillColor('#000000').text('Note :', leftMargin, noteY);
      noteY += 13;

      const notes = [
        'Saat peminjaman barang, diwajibkan meminta ijin kepada pengurus dan merawat barang inventaris tersebut dengan sebaik-baiknya.',
        `Setelah pemakaian barang, harap dikembalikan tepat waktu dan lapor kembali ke pengurus ${rtName}.`,
        'Apabila terjadi kerusakan atau kehilangan, peminjam bertanggung jawab mengganti / memperbaiki barang yang rusak/hilang tersebut.',
      ];

      if (!isActive && loan.returnNote) {
        notes.push(`Catatan Pengembalian: ${loan.returnNote}`);
      }

      doc.font('Helvetica').fontSize(8.5).fillColor('#222222');
      notes.forEach((nt, idx) => {
        doc.text(`${idx + 1}.`, leftMargin + 8, noteY, { width: 14 });
        doc.text(nt, leftMargin + 22, noteY, { width: contentWidth - 26 });
        noteY += doc.heightOfString(nt, { width: contentWidth - 26 }) + 3;
      });

      // 6. TANDA TANGAN (2 KOLOM SEJAJAR RAPI)
      const ttdY = noteY + 20;
      const colTtdWidth = contentWidth / 2;

      // Kolom Kiri: Peminjam Barang
      doc.font('Helvetica').fontSize(9.5).fillColor('#000000').text('Peminjam Barang,', leftMargin, ttdY, {
        width: colTtdWidth,
        align: 'center',
      });
      doc.font('Helvetica-Bold').text(`( ${loan.borrowerName || '................................'} )`, leftMargin, ttdY + 65, {
        width: colTtdWidth,
        align: 'center',
      });

      // Kolom Kanan: Mengetahui Pengurus
      doc.font('Helvetica').fontSize(9).fillColor('#333333').text(`${rtName}, ${docDate}`, leftMargin + colTtdWidth, ttdY - 14, {
        width: colTtdWidth,
        align: 'center',
      });
      doc.font('Helvetica').fontSize(9.5).fillColor('#000000').text(`Mengetahui,\nPengurus ${rtName}`, leftMargin + colTtdWidth, ttdY, {
        width: colTtdWidth,
        align: 'center',
      });
      doc.font('Helvetica-Bold').text(`( ${loan.createdBy || 'Pengurus RT'} )`, leftMargin + colTtdWidth, ttdY + 65, {
        width: colTtdWidth,
        align: 'center',
      });

      // 7. FOOTER
      const footerY = 780;
      doc.lineWidth(0.5).strokeColor('#cbd5e1').moveTo(leftMargin, footerY).lineTo(rightMargin, footerY).stroke();
      doc.font('Helvetica').fontSize(8).fillColor('#64748b').text(
        `Dokumen ini sah dan diterbitkan secara digital oleh Sistem Kas & Inventaris ${rtName}`,
        leftMargin,
        footerY + 6,
        { width: contentWidth, align: 'center' }
      );

      doc.end();
    } catch (err) {
      reject(err);
    }
  });
}
