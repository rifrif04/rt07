package id.rt07.kas;

import android.Manifest;
import android.app.Activity;
import android.app.AlertDialog;
import android.app.DownloadManager;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.PackageManager;
import android.graphics.Color;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Environment;
import android.print.PrintAttributes;
import android.print.PrintDocumentAdapter;
import android.print.PrintManager;
import android.text.InputType;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.CookieManager;
import android.webkit.JavascriptInterface;
import android.webkit.URLUtil;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceError;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Button;
import android.widget.EditText;
import android.widget.FrameLayout;
import android.widget.ProgressBar;
import android.widget.TextView;
import android.widget.Toast;
import android.widget.Toolbar;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

public class MainActivity extends Activity {

    private static final String PREFS = "kas_rt";
    private static final String KEY_SERVER = "server_url";
    private static final int REQ_WRITE_STORAGE = 1001;

    private SharedPreferences prefs;
    private WebView webView;
    private ProgressBar progress;
    private View errorView;
    private TextView errorMessage;
    private String serverUrl;
    private boolean mainFrameError = false;
    private PendingDownload pendingDownload;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        prefs = getSharedPreferences(PREFS, MODE_PRIVATE);
        webView = findViewById(R.id.webview);
        progress = findViewById(R.id.progress);
        errorView = findViewById(R.id.error_view);
        errorMessage = findViewById(R.id.error_message);

        Toolbar toolbar = findViewById(R.id.toolbar);
        toolbar.setTitle(R.string.app_name);
        toolbar.inflateMenu(R.menu.main_menu);
        toolbar.setOnMenuItemClickListener(this::onMenuClick);

        Button retry = findViewById(R.id.btn_retry);
        retry.setOnClickListener(v -> {
            hideError();
            if (serverUrl != null) {
                loadServer(serverUrl);
            } else {
                showServerDialog(true);
            }
        });
        Button change = findViewById(R.id.btn_change);
        change.setOnClickListener(v -> showServerDialog(false));

        setupWebView();

        serverUrl = prefs.getString(KEY_SERVER, null);
        if (serverUrl == null || serverUrl.isEmpty()) {
            serverUrl = null;
            showServerDialog(true);
        } else {
            loadServer(serverUrl);
        }
    }

    private void setupWebView() {
        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setDatabaseEnabled(true);
        settings.setAllowFileAccess(false);
        settings.setAllowContentAccess(false);
        settings.setSupportZoom(false);
        settings.setBuiltInZoomControls(false);
        settings.setDisplayZoomControls(false);
        settings.setUseWideViewPort(true);
        settings.setLoadWithOverviewMode(false);
        settings.setMediaPlaybackRequiresUserGesture(true);
        settings.setCacheMode(WebSettings.LOAD_DEFAULT);
        settings.setMixedContentMode(WebSettings.MIXED_CONTENT_COMPATIBILITY_MODE);
        webView.setBackgroundColor(Color.parseColor("#f3f6f5"));

        CookieManager cookies = CookieManager.getInstance();
        cookies.setAcceptCookie(true);
        cookies.setAcceptThirdPartyCookies(webView, true);

        webView.addJavascriptInterface(new AndroidBridge(), "AndroidApp");
        webView.setWebChromeClient(new WebChromeClient());

        webView.setWebViewClient(new WebViewClient() {
            @Override
            public void onPageStarted(WebView view, String url, android.graphics.Bitmap favicon) {
                mainFrameError = false;
                progress.setVisibility(View.VISIBLE);
            }

            @Override
            public void onPageFinished(WebView view, String url) {
                progress.setVisibility(View.GONE);
                injectPrintBridge();
                if (!mainFrameError) {
                    hideError();
                }
            }

            @Override
            public void onReceivedError(WebView view, WebResourceRequest request, WebResourceError error) {
                if (request != null && request.isForMainFrame()) {
                    mainFrameError = true;
                    CharSequence description = error == null ? null : error.getDescription();
                    showError(description == null ? "" : description.toString());
                }
            }

            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                Uri uri = request.getUrl();
                String scheme = uri.getScheme();
                if (scheme == null) {
                    return false;
                }
                if ("http".equalsIgnoreCase(scheme) || "https".equalsIgnoreCase(scheme)) {
                    if (isSameServer(uri)) {
                        return false;
                    }
                    openExternal(uri);
                    return true;
                }
                if ("mailto".equalsIgnoreCase(scheme)
                        || "tel".equalsIgnoreCase(scheme)
                        || "sms".equalsIgnoreCase(scheme)
                        || "whatsapp".equalsIgnoreCase(scheme)
                        || "intent".equalsIgnoreCase(scheme)
                        || "market".equalsIgnoreCase(scheme)
                        || "geo".equalsIgnoreCase(scheme)) {
                    openExternal(uri);
                    return true;
                }
                return false;
            }
        });

        webView.setDownloadListener((url, userAgent, contentDisposition, mimeType, contentLength) -> {
            PendingDownload download = new PendingDownload(url, userAgent, contentDisposition, mimeType);
            if (Build.VERSION.SDK_INT < 29
                    && checkSelfPermission(Manifest.permission.WRITE_EXTERNAL_STORAGE) != PackageManager.PERMISSION_GRANTED) {
                pendingDownload = download;
                requestPermissions(new String[]{Manifest.permission.WRITE_EXTERNAL_STORAGE}, REQ_WRITE_STORAGE);
            } else {
                enqueueDownload(download);
            }
        });
    }

    private boolean onMenuClick(MenuItem item) {
        int id = item.getItemId();
        if (id == R.id.action_reload) {
            hideError();
            if (serverUrl != null) {
                webView.reload();
            } else {
                showServerDialog(true);
            }
            return true;
        }
        if (id == R.id.action_server) {
            showServerDialog(false);
            return true;
        }
        if (id == R.id.action_about) {
            showAbout();
            return true;
        }
        return false;
    }

    private void loadServer(String url) {
        serverUrl = url;
        hideError();
        progress.setVisibility(View.VISIBLE);
        webView.loadUrl(url.endsWith("/") ? url : url + "/");
    }

    private void showError(String detail) {
        progress.setVisibility(View.GONE);
        errorMessage.setText(getString(R.string.error_message,
                serverUrl == null ? "-" : serverUrl,
                detail == null || detail.isEmpty() ? getString(R.string.error_generic) : detail));
        errorView.setVisibility(View.VISIBLE);
    }

    private void hideError() {
        errorView.setVisibility(View.GONE);
    }

    private void showServerDialog(boolean firstRun) {
        float density = getResources().getDisplayMetrics().density;
        int padding = (int) (20 * density);

        EditText input = new EditText(this);
        input.setSingleLine(true);
        input.setInputType(InputType.TYPE_CLASS_TEXT | InputType.TYPE_TEXT_VARIATION_URI);
        input.setHint(R.string.server_hint);
        input.setText(serverUrl == null ? "" : serverUrl);
        input.setSelection(input.getText().length());

        FrameLayout container = new FrameLayout(this);
        container.setPadding(padding, 0, padding, 0);
        container.addView(input, new FrameLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.WRAP_CONTENT));

        AlertDialog.Builder builder = new AlertDialog.Builder(this)
                .setTitle(R.string.server_dialog_title)
                .setMessage(R.string.server_dialog_message)
                .setView(container)
                .setPositiveButton(R.string.save, null);

        if (firstRun) {
            builder.setNegativeButton(R.string.exit, (dialog, which) -> finish());
        } else {
            builder.setNegativeButton(R.string.cancel, null);
        }

        AlertDialog dialog = builder.create();
        dialog.setCancelable(!firstRun);
        dialog.setCanceledOnTouchOutside(!firstRun);
        dialog.setOnShowListener(d -> dialog.getButton(DialogInterface.BUTTON_POSITIVE).setOnClickListener(v -> {
            String normalized = normalizeServerUrl(input.getText().toString());
            if (normalized == null) {
                input.setError(getString(R.string.server_invalid));
                return;
            }
            prefs.edit().putString(KEY_SERVER, normalized).apply();
            dialog.dismiss();
            loadServer(normalized);
        }));
        dialog.show();
    }

    private String normalizeServerUrl(String rawInput) {
        if (rawInput == null) {
            return null;
        }
        String raw = rawInput.trim();
        if (raw.isEmpty()) {
            return null;
        }
        if (!raw.matches("(?i)^[a-z][a-z0-9+.-]*://.*")) {
            raw = "http://" + raw;
        }
        Uri uri;
        try {
            uri = Uri.parse(raw);
        } catch (Exception e) {
            return null;
        }
        String scheme = uri.getScheme();
        if (scheme == null) {
            return null;
        }
        scheme = scheme.toLowerCase(Locale.US);
        if (!"http".equals(scheme) && !"https".equals(scheme)) {
            return null;
        }
        String host = uri.getHost();
        if (host == null || host.isEmpty()) {
            return null;
        }
        String hostPart = host;
        if (hostPart.contains(":") && !hostPart.startsWith("[")) {
            hostPart = "[" + hostPart + "]";
        }
        StringBuilder result = new StringBuilder(scheme).append("://").append(hostPart);
        int port = uri.getPort();
        if (port > 0) {
            result.append(':').append(port);
        }
        return result.toString();
    }

    private boolean isSameServer(Uri uri) {
        if (serverUrl == null) {
            return false;
        }
        Uri base;
        try {
            base = Uri.parse(serverUrl);
        } catch (Exception e) {
            return false;
        }
        String hostA = uri.getHost();
        String hostB = base.getHost();
        if (hostA == null || hostB == null || !hostA.equalsIgnoreCase(hostB)) {
            return false;
        }
        return effectivePort(uri) == effectivePort(base);
    }

    private int effectivePort(Uri uri) {
        int port = uri.getPort();
        if (port != -1) {
            return port;
        }
        return "https".equalsIgnoreCase(uri.getScheme()) ? 443 : 80;
    }

    private void openExternal(Uri uri) {
        try {
            Intent intent = new Intent(Intent.ACTION_VIEW, uri);
            intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            startActivity(intent);
        } catch (Exception e) {
            Toast.makeText(this, R.string.no_app, Toast.LENGTH_SHORT).show();
        }
    }

    private void injectPrintBridge() {
        String script = "(function(){if(window.__kasRtPrint)return;window.__kasRtPrint=true;"
                + "window.print=function(){try{AndroidApp.printPage();}catch(e){}};})();";
        webView.evaluateJavascript(script, null);
    }

    private void printCurrentPage() {
        PrintManager printManager = (PrintManager) getSystemService(Context.PRINT_SERVICE);
        if (printManager == null) {
            Toast.makeText(this, R.string.print_failed, Toast.LENGTH_SHORT).show();
            return;
        }
        String jobName = getString(R.string.app_name) + " - Laporan";
        PrintDocumentAdapter adapter = webView.createPrintDocumentAdapter(jobName);
        PrintAttributes attributes = new PrintAttributes.Builder()
                .setMediaSize(PrintAttributes.MediaSize.ISO_A4)
                .setMinMargins(PrintAttributes.Margins.NO_MARGINS)
                .build();
        printManager.print(jobName, adapter, attributes);
    }

    private void enqueueDownload(PendingDownload download) {
        try {
            String cookies = CookieManager.getInstance().getCookie(download.url);
            String fileName = URLUtil.guessFileName(download.url, download.contentDisposition, download.mimeType);
            int dot = fileName.lastIndexOf('.');
            String base = dot > 0 ? fileName.substring(0, dot) : fileName;
            String extension = dot > 0 ? fileName.substring(dot) : "";
            String stamp = new SimpleDateFormat("yyyyMMdd-HHmmss", Locale.US).format(new Date());
            fileName = base + "-" + stamp + extension;

            DownloadManager.Request request = new DownloadManager.Request(Uri.parse(download.url));
            if (cookies != null && !cookies.isEmpty()) {
                request.addRequestHeader("Cookie", cookies);
            }
            if (download.userAgent != null) {
                request.addRequestHeader("User-Agent", download.userAgent);
            }
            if (download.mimeType != null) {
                request.setMimeType(download.mimeType);
            }
            request.setTitle(fileName);
            request.setDescription(getString(R.string.download_description));
            request.setNotificationVisibility(DownloadManager.Request.VISIBILITY_VISIBLE_NOTIFY_COMPLETED);
            request.setDestinationInExternalPublicDir(Environment.DIRECTORY_DOWNLOADS, fileName);

            DownloadManager manager = (DownloadManager) getSystemService(Context.DOWNLOAD_SERVICE);
            if (manager == null) {
                throw new IllegalStateException("DownloadManager tidak tersedia");
            }
            manager.enqueue(request);
            Toast.makeText(this, getString(R.string.download_started, fileName), Toast.LENGTH_SHORT).show();
        } catch (Exception e) {
            Toast.makeText(this, R.string.download_failed, Toast.LENGTH_LONG).show();
        }
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        if (requestCode != REQ_WRITE_STORAGE) {
            return;
        }
        if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
            if (pendingDownload != null) {
                enqueueDownload(pendingDownload);
            }
        } else {
            Toast.makeText(this, R.string.download_permission_denied, Toast.LENGTH_LONG).show();
        }
        pendingDownload = null;
    }

    private void showAbout() {
        String version;
        try {
            version = getPackageManager().getPackageInfo(getPackageName(), 0).versionName;
        } catch (Exception e) {
            version = "1.0.0";
        }
        new AlertDialog.Builder(this)
                .setTitle(R.string.about_title)
                .setMessage(getString(R.string.about_message, version, serverUrl == null ? "-" : serverUrl))
                .setPositiveButton(android.R.string.ok, null)
                .show();
    }

    @Override
    public void onBackPressed() {
        if (errorView.getVisibility() == View.VISIBLE) {
            finish();
            return;
        }
        if (webView.canGoBack()) {
            webView.goBack();
        } else {
            super.onBackPressed();
        }
    }

    @Override
    protected void onPause() {
        CookieManager.getInstance().flush();
        super.onPause();
    }

    @Override
    protected void onDestroy() {
        if (webView != null) {
            webView.removeJavascriptInterface("AndroidApp");
            webView.destroy();
        }
        super.onDestroy();
    }

    private class AndroidBridge {
        @JavascriptInterface
        public void printPage() {
            runOnUiThread(MainActivity.this::printCurrentPage);
        }
    }

    private static class PendingDownload {
        final String url;
        final String userAgent;
        final String contentDisposition;
        final String mimeType;

        PendingDownload(String url, String userAgent, String contentDisposition, String mimeType) {
            this.url = url;
            this.userAgent = userAgent;
            this.contentDisposition = contentDisposition;
            this.mimeType = mimeType;
        }
    }
}
