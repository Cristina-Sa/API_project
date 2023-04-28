if (window.File && window.FileReader && window.FileList) {
    console.log('Todas las APIs soportadas')
} else {
    alert('La API de FILE no es soportada en este navegador')
}


function handleFileSelect(evt) {
    var videoFramework = document.getElementById('videoFramework');
    var file = evt.target.files[0];
    var output = [];

    if (file.type.match('video/*')) {

        alert("Cargando el video")
        var video = document.getElementById('myVideo');
        var obj_url = window.URL.createObjectURL(file);
        video.src = obj_url;
        videoFramework.style.display = 'block';

    } else {
        alert("Error en el fichero seleccionado: debe elegir un archivo con un formato de vídeo válido.");
        output.innerHTML = "Error de formato.";
    }
}

var video = document.getElementById('myVideo');

function subirVolumen() {
    if (video.volume <= 0.9) {
        video.volume += 0.1
    };
}

function bajarVolumen() {
    if (video.volume >= 0.1) {
        video.volume -= 0.1
    };
}