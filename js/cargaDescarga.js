var input = document.querySelector('input');
var preview = document.querySelector('#preview');

input.style.opacity = 0;
input.addEventListener('change', updateTextDisplay);

function updateTextDisplay() {
    while (preview.firstChild) {
        preview.removeChild(preview.firstChild);
    }
    var parrafo = document.getElementById("datos_archivo");
    var curFiles = input.files;

    if (curFiles.length === 0) {
        parrafo.textContent = 'No files currently selected for upload';
    } else {
        for (var i = 0; i < curFiles.length; i++) {
            if (validFileType(curFiles[i])) {

                var size = 'Tamaño: ' + returnFileSize(curFiles[i].size) + '.';
                var nombre = 'Nombre archivo: ' + curFiles[i].name + ".";

                var tituloParra = document.createElement("p");
                setStyle(tituloParra);
                tituloParra.textContent = nombre;

                var sizeParra = document.createElement("p");
                setStyle(sizeParra);
                sizeParra.textContent = size;

                preview.appendChild(tituloParra);
                preview.appendChild(sizeParra);
                // runOCR(curFiles[i].name);

            } else {
                console.log(curFiles[i])
                var alerta = 'File name ' + curFiles[i].name + ': Not a valid file type. Update your selection.';
                var parra = document.createElement("p");
                setStyle(parra);
                parra.textContent = alerta;
                preview.appendChild(parra);
            }
        }
    }
}

function runOCR(url) {
    Tesseract.recognize(url)
        .then(function (result) {
            document.getElementById("ocr_results")
                .innerText = result.text;
        }).progress(function (result) {
        document.getElementById("ocr_status")
            .innerText = result["status"] + " (" +
            (result["progress"] * 100) + "%)";
    });
}

const fileTypes = [
    'application/pdf',
    '.doc',
    '.docx',
    '.xml',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'image/png',
    'image/jpeg',
    'image/pjpeg',
    '.epub',
    'application/epub+zip'
];

function validFileType(file) {
    for (var i = 0; i < fileTypes.length; i++) {
        if (file.type === fileTypes[i]) {
            console.log(file.type)
            return true;
        }
    }
    console.log(file.type)
    return false;
}

function returnFileSize(number) {
    if (number < 1024) {
        return number + 'bytes';
    } else if (number >= 1024 && number < 1048576) {
        return (number / 1024).toFixed(1) + 'KB';
    } else if (number >= 1048576) {
        return (number / 1048576).toFixed(1) + 'MB';
    }
}

function setStyle(para) {
    para.style.background = '#eee';
    para.style.display = 'flex';
    para.style.justifyContent = 'space-between';
    para.style.marginTop = '10px';
    para.style.marginBottom = '10px';
    para.style.listStyleType = 'none';
    para.style.border = '1px solid black';
}
