// 2020 Vedana Lorenzo
// JavaScript Source Code
// Available at https://github.com/itsveddy/whoami/
// V 1.0

function nome() {
  var nome = "Lorenzo";
  var cognome = "Vedana";
  $("#output").append(`<p>Hello, I'm ${nome} ${cognome}!</p>`);
}

function azione () {
  var coding = "I'm trying to fly in the computer programming world...";
  $("#output").append(`<p>${coding}</p>`);
}

function github () {
  var github = "GitHub - Who am I";
  var result = github.link ("https://github.com/itsveddy/whoami/");
  $("#link").append(`<p>${result}</p>`);
}