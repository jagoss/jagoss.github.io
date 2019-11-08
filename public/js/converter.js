var url = "https://docs.google.com/document/export?format=pdf&id=1ML11ZyyMpnAr6clIAwWrXD53pQgNR-DppMYwt9XvE6s&token=AC4w5Vg7fSWH1Hq0SgNckx4YCvnGPaScyw%3A1423618416864";

function process(url) {
    var pages = [], heights = [], width = 0, height = 0, currentPage = 1;
    var scale = 1.5;
    PDFJS.disableWorker = true; // due to CORS
    PDFJS.getDocument(url).then(function (pdf) {
        getPage();

        function getPage() {
            pdf.getPage(currentPage).then(function (page) {
                console.log("Printing " + currentPage);
                var viewport = page.getViewport(scale);
                var canvas = document.createElement('canvas'), ctx = canvas.getContext('2d');
                var renderContext = {canvasContext: ctx, viewport: viewport};
                canvas.height = viewport.height;
                canvas.width = viewport.width;
                page.render(renderContext).then(function () {
                    pages.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
                    heights.push(height);
                    height += canvas.height;
                    if (width < canvas.width) width = canvas.width;
                    if (currentPage < pdf.numPages) {
                        currentPage++;
                        getPage();
                    } else {
                        draw();
                    }
                });
            });
        }
    });
}

function draw() {
    var canvas = document.createElement('canvas'), ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;
    for (var i = 0; i < pages.length; i++)
        ctx.putImageData(pages[i], 0, heights[i]);
    document.body.appendChild(canvas);
}

