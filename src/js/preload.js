const ipcRenderer = require('electron').ipcRenderer;

window.open = function(url, name, features) {
  var windowObj = null;
  const replay = ipcRenderer.sendSync('create-new-window', {url: url, name: name, features: features});
  console.log(replay.focus);
  return replay;
};
