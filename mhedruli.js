var letters = [
  [/А/ig, "ა"],
  [/Е/ig, "ე"],
  [/И/ig, "ი"],
  [/О/ig, "ო"],
  [/Я/ig, "ია"],
  [/У/ig, "უ"],
  [/Г/ig, "გ"],
  [/В/ig, "ვ"],
  [/Л/ig, "ლ"],
  [/Н/ig, "ნ"],
  [/М/ig, "მ"],
  [/Р/ig, "რ"],
  [/С/ig, "ს"],
  [/ПФ/ig, "ფ"],
  [/КХ/ig, "ქ"],
  [/ГХ/ig, "ღ"],
  [/ДЗ/ig, "ძ"],
  [/ТС/ig, "წ"],
  [/ТЧ/ig, "о"],
  [/ДЖ/ig, "ჯ"],
  [/ХЭ/ig, "ჰ"],
  [/Б/ig, "ბ"],
  [/Д/ig, "დ"],
  [/З/ig, "ზ"],
  [/К/ig, "კ"],
  [/П/ig, "პ"],
  [/Ж/ig, "ჟ"],
  [/Т/ig, "ტ"],
  [/Ш/ig, "შ"],
  [/Ч/ig, "ჩ"],
  [/Ц/ig, "ც"],
  [/Х/ig, "ხ"],
  [/Й/ig, "იჰ"],
  [/Ю/ig, "იჰუ"],
  [/[ЫЬЪ]/ig, ""]
]

var replaceLetters = function(text, complexity) {
  for(var i = 0; i < complexity; i++) {
    var letter = letters[i];
    text = text.replace(letter[0], letter[1]);
  }
  return text;
}

var replaceTextInNode = function(parentNode, complexity) {
  for(var i = parentNode.childNodes.length-1; i >= 0; i--){
    var node = parentNode.childNodes[i];

    if(node.nodeType == Element.TEXT_NODE){
      node.textContent = replaceLetters(node.textContent, complexity);
    } else if(node.nodeType == Element.ELEMENT_NODE){
      replaceTextInNode(node, complexity);
    }
  }
};

chrome.storage.sync.get({complexity: "1"}, function(items) {
  var complexity = parseInt(items.complexity);
  if (complexity < 1) { complexity = 1; }
  if (complexity > 32) { complexity = letters.length; }

  replaceTextInNode(document.body, complexity);
});
