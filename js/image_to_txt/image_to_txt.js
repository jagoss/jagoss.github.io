// 1. After including the Tesseract script, initialize it in the browser
// Note: to prevent problems while tesseract loads scripts, provide the absolute path to the file from your domain
 window.Tesseract = Tesseract.create({
    // Path to worker
    workerPath: 'https://cdn.rawgit.com/naptha/tesseract.js/0.2.0/dist/worker.js',
    // Path of folder where the language trained data is located
    // note the "/" at the end, this string will be concatenated with the selected language
    langPath: 'https://cdn.rawgit.com/naptha/tessdata/gh-pages/3.02/eng.traineddata.gz',
    // Path to index script of the tesseract core ! https://github.com/naptha/tesseract.js-core
    corePath: 'https://cdn.rawgit.com/naptha/tesseract.js-core/0.1.0/index.js',
});

// 2. Write some logic to initialize the text recognition
document.getElementById("img-to-txt").addEventListener("click", function () {
    let btn = this;

    // Disable button until the text recognition finishes
    btn.disable = true;

    // Configure recognition
    let tesseractSettings = {
        lang: 'eng'
    };
    var $pdfCanvas = $("#pdf-canvas");
    var myCanvasContext = $pdfCanvas[0].getContext("2d");


//     Tesseract.recognize(
//         myCanvasContext,
//         'eng',
//         { logger: m => console.log(m) }
//     ).then(({ data: { text } }) => {
//         console.log(text);
//     })
// });
//


    // Convert an image to text. This task works asynchronously, so you may show
    // your user a loading dialog or something like that, or show the progress with Tesseract
    Tesseract.recognize(myCanvasContext, tesseractSettings).then(function (result) {
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