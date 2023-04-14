var nome_usuario = document.getElementById("nome_user");
var nome_card = document.getElementById("nome_user_card");
var idade_user = document.getElementById("idade_user");
var estado_usuario = document.getElementById("estado_user");
var bio_usuario = document.getElementById("bio_user");
var resultado = document.getElementById("res");
// -----------------------------------------------------------

function enviar() {
  var nome_formulario = document.getElementById("form_name").value;
  var idade_formulario = document.getElementById("form_idade").value;
  var estado_form = document.getElementById("estado").value;
  var bio_form = document.getElementById("bio").value;

  // Nomes ----------------------------------
  if (nome_formulario == "") {
    window.alert("Nome em branco");
  } else {
    nome_usuario.textContent = nome_formulario;
    nome_card.textContent = nome_formulario;
  }
  //-----------------------------------------

  // Idade e Validação-------------------------
  var diferencaAnos = idade_formulario;
  if (diferencaAnos >= 18) {
    idade_user.textContent = idade_formulario;
  } else {
    window.alert("Você Não é Maior de 18 Anos.");
  }
  //------------------------------------------

  // Localização --------------------------
  if (estado_form == "") {
    window.alert("Selecione uma Localização");
  } else {
    estado_user.textContent = estado_form;
  }
  // --------------------------------------

  // BIO ------------------------------
  bio_usuario.textContent = bio_form;
  //-----------------------------------
}
