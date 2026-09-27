import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
})

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); 
    alert('¡Formulario enviado con éxito!');
    this.reset();
});