console.log("Script is loaded and running!");

var names = ["John", "Paul", "Jason", "Mary", "Jenny", "Diana"];

for (var i = 0; i < names.length; i++) {
  var name = names[i];

  if (name[0].toLowerCase() === 'j') {
    SpeakGoodBye(name);  // Прощаемся с именами, начинающимися на 'J' или 'j'
  } else {
    SpeakHello(name);    // Приветствуем все остальные имена
  }
}
