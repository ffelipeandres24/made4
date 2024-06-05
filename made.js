function irASeccion(seccion) {
    var secciones = ["inicio", "fotos", "videos", "sobre-ti", "mensaje"];
    for (var i = 0; i < secciones.length; i++) {
        document.getElementById(secciones[i]).style.display = "none";
    }
    document.getElementById(seccion).style.display = "block";
}

function irAInicio() {
    irASeccion("inicio");
}

function irASeccionFotos() {
    irASeccion("fotos");
}

function irASeccionVideos() {
    irASeccion("videos");
}

function irASeccionSobreTi() {
    irASeccion("sobre-ti");
}

function irASeccionMensaje() {
    irASeccion("mensaje");
}

window.onload = function() {
    irASeccion("inicio");
};
// Guardar mensaje
function guardarMensaje(mensaje) {
    localStorage.setItem('mensaje', mensaje);
}

// Cargar mensaje guardado
function cargarMensaje() {
    const mensajeGuardado = localStorage.getItem('mensaje');
    if (mensajeGuardado) {
        document.getElementById('mensaje').value = mensajeGuardado;
    }
}

// Agregar evento al cargar la página
window.onload = function() {
    cargarMensaje();
};