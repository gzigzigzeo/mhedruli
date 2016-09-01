var setIcon = function() {
  var canvas = document.createElement('canvas');
  canvas.width = 38;
  canvas.height = 38;

  var context = canvas.getContext('2d');
  context.fillStyle = "#FFFFFF";
  context.fillRect(0, 0, 38, 38);

  context.fillStyle = "#000000";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.font = "28px Arial";
  context.fillText("გ", 19, 15);

  chrome.browserAction.setIcon({
    imageData: context.getImageData(0, 0, 38, 38)
  });
}

var setCallback = function() {
  chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null, {file: "mhedruli.js"});
  });
}

setCallback();
setIcon();
