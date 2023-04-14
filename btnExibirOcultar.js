// Função Exibir/Ocultar do botão Formulário.
var btn = document.querySelector("#esconder-mostrar");
var ocultar = document.getElementById("teste");
var form = document.querySelector("#profileForm");

btn.addEventListener("click", () => {
  if (form.style.display === "block") {
    form.style.display = "none";
    ocultar.textContent = "Exibir";
  } else {
    form.style.display = "block";
    ocultar.textContent = "Ocultar";
  }
});
// ------------------------------------
