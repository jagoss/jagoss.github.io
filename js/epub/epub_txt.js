document.getElementById("convertir").addEventListener("click", function () {
    let btn = this;
    btn.disable = true;
    var book = ePub("https://s3.amazonaws.com/epubjs/books/moby-dick/OPS/package.opf");
    book.ready.then(function () {
        book.getRange("epubcfi(/6/14[xchapter_001]!/4/2,/2/2/2[c001s0000]/1:0,/8/2[c001p0003]/1:663)").then(function (range) {
            let text = range.toString()
            console.log(text);
            $viewer.textContent = text;
        });
    });
    btn.disable = false;
}