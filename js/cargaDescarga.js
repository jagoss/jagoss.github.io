var input = document.querySelector('input');
// var preview = document.querySelector('#preview');

input.style.opacity = 0;
input.addEventListener('change', updateTextDisplay);

function updateTextDisplay() {

    var parrafo = document.getElementById("datos_archivo");
    var curFiles = input.files;

    if(curFiles.length === 0) {
        parrafo.textContent = 'No files currently selected for upload';
    } else {
        for(var i = 0; i < curFiles.length; i++) {
            if(validFileType(curFiles[i])) {

                var size ='Tamaño: ' + returnFileSize(curFiles[i].size) + '.';
                var nombre = 'Nombre archivo: ' + curFiles[i].name + ".";

                parrafo.textContent = nombre;
                var nuevoParra = document.createElement("p");
                setStyle(nuevoParra);
                var node = document.createTextNode(size);
                nuevoParra.appendChild(node);

                var element = document.getElementById("preview");
                element.appendChild(nuevoParra);

            } else {
                parrafo.textContent = 'File name ' + curFiles[i].name + ': Not a valid file type. Update your selection.';
            }
        }
    }
}

const fileTypes = [
    '.doc',
    '.docx',
    '.xml',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
];

function validFileType(file) {
    for(var i = 0; i < fileTypes.length; i++) {
        if(file.type === fileTypes[i]) {
            return true;
        }
    }
    return false;
}

function returnFileSize(number) {
    if(number < 1024) {
        return number + 'bytes';
    } else if(number >= 1024 && number < 1048576) {
        return (number/1024).toFixed(1) + 'KB';
    } else if(number >= 1048576) {
        return (number/1048576).toFixed(1) + 'MB';
    }
}

function setStyle(para){
    para.style.background = '#eee';
    para.style.display = 'flex';
    para.style.justifyContent = 'space-between';
    para.style.marginTop = '10px';
    para.style.marginBottom = '10px';
    para.style.listStyleType= 'none';
    para.style.border = '1px solid black';
}