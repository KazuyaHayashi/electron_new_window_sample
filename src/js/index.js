window.onload = function() {
  const webview = document.querySelector('webview');
  webview.addEventListener('dom-ready', (e) => {
    webview.getWebContents().openDevTools();
  });
  webview.addEventListener('new-window', (e) => {
    console.log('hello new-window event!');
    console.log(e);
  });
  webview.addEventListener('console-message', (e) => {
    console.log(e.message);
  });
}
