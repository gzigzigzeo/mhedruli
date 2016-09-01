var defaultComplexity = "1";
var complexityProperty = "complexity";

function save() {
  var complexity = document.getElementById(complexityProperty).value;
  chrome.storage.sync.set({complexity: complexity});
}

function restore() {
  chrome.storage.sync.get({
    complexity: defaultComplexity,
  }, function(items) {
    document.getElementById(complexityProperty).value = items.complexity;
  });
}

document.getElementById('save').addEventListener('click', save);
document.addEventListener('DOMContentLoaded', restore);
