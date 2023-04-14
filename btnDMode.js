function mudarCor() {
  var checkbox = document.getElementById("check-apple");
  var footer = document.getElementById("footer");
  var nav = document.getElementById("navegacao");
  var card = document.getElementById("card_principal");
  var card_corpo = document.getElementById("card_body");
  var form = document.getElementById("form_dark");
  var img_card = document.getElementById('card_img"');

  var body = document.body;

  // VALIDAÇÃO DAS CORES------------------------
  if (checkbox.checked) {
    body.style.backgroundColor = "#212529";
    footer.style.backgroundColor = "#343a40";
    nav.style.backgroundColor = "#343a40";
    card.style.backgroundColor = "#ced4da";
    card_corpo.style.backgroundColor = "#ced4da";
    form.style.backgroundColor = "#ced4da";
    img_card.style.backgroundColor = "#ced4da";
  } else {
    body.style.backgroundColor = "";
    footer.style.backgroundColor = "";
    nav.style.backgroundColor = "";
    card.style.backgroundColor = "";
    card_corpo.style.backgroundColor = "";
    form.style.backgroundColor = "";
  }
}
