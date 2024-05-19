document
  .getElementById("languageForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let spanishCheckbox = document.getElementById("spanish");
    let englishCheckbox = document.getElementById("english");

    if (spanishCheckbox.checked && englishCheckbox.checked) {
      alert("Has seleccionado ambas opciones.");
    } else if (spanishCheckbox.checked) {
      alert("Has seleccionado el idioma Español");
    } else if (englishCheckbox.checked) {
      alert("You have selected the English language");
    } else {
      alert("No has seleccionado ningún idioma");
    }
  });
