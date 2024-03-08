const scriptURL = 'https://script.google.com/macros/s/AKfycbyQ26067xfcRRO_fVx-eMzYMcl56R5MdNTrJtBrU3wyS3FdhYsYxleDVg2KW808o-Wd/exec';

const form = document.forms['contact-form'];
var popupForm = document.getElementById("form-overlay");

form.addEventListener('submit', e =>{
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("¡Gracias por llenar el formulario! Se te contactará cuando se anuncie el ganador."))
    .then(() => { popupForm.style.display = "none"; })
    .catch(error => console.error('Error!', error.message))
});