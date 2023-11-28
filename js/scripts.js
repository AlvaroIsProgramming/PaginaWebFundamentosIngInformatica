/*!
    * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2023 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 
window.addEventListener('DOMContentLoaded', event => {
    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));

        });
    }

});
function Login() {
    var usuarioField = document.getElementById('inputUsuario');
    var contrasenaField = document.getElementById('inputPassword');
  
    if (!usuarioField.checkValidity() || !contrasenaField.checkValidity()) {
      alert('Por favor, rellena los datos de forma correcta.');
      return false; // Prevent form submission
    }else{
        sessionStorage.setItem("Usuario", document.getElementById("inputUsuario").value);
        window.location.href = "index.html";
    }
  }
function alertaca() {
    const urls = ["https://c.tenor.com/K0HVCg5P4mIAAAAi/spinning-cheems-kbekeb-gif.gif", "https://c.tenor.com/Nhh4h9L-N58AAAAC/magic-word-jurassic-park.gif", "https://c.tenor.com/bQCHJwgCNuMAAAAC/kitten-cat.gif", "https://c.tenor.com/gTg8ZSZMR6YAAAAC/scaler-create-impact.gif"];
    const gifs = urls[(Math.random() * urls.length) | 0]
    Swal.fire({
        title: 'Funcionalidad todavia no disponible.',
        text: '',
        imageUrl: gifs,
        imageHeight: 300
    })
    }