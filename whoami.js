// 2020 Vedana Lorenzo
// JavaScript Source Code
// Available at https://github.com/itsveddy/whoami/

function nome() {
  var nome = "Lorenzo";
  var cognome = "Vedana";
  $("#output").html(`<p>Hello, I'm ${nome} ${cognome}!</p>`);
}

function azione () {
  var coding = "I'm trying to fly in the computer programming world..."
  $("#output").append(`<p>${coding}</p>`)
}