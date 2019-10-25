// 1. After including the Tesseract script, initialize it in the browser
// Note: to prevent problems while tesseract loads scripts, provide the absolute path to the file from your domain


// 2. Write some logic to initialize the text recognition
document.getElementById("convertir").addEventListener("click", function () {
    let btn = this;

    // Disable button until the text recognition finishes
    btn.disable = true;

    // Configure recognition
    let tesseractSettings = {
        lang: 'spa'
    };
    const canvas = $('#pdf-canvas')[0];
    imagen=canvas.toDataURL()
    // Convert an image to text. This task works asynchronously, so you may show
    // your user a loading dialog or something like that, or show the progress with Tesseract
    Tesseract.recognize(imagen).then(function (result) {
        // The result object of a text recognition contains detailed data about all the text
        // recognized in the image, words are grouped by arrays etc
        console.log(result);

        // Show recognized text in the browser !
        alert(result.text);
    }).finally(function () {
        // Enable button once the text recognition finishes (either if fails or not)
        btn.disable = false;
    });
}, false);