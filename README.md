# Invoice Editor


**pdfconvert.js**



**Initiate**

```
var div = document.getElementById("invoiceholder");
var node = $("#invoiceholder");
var invoice_id = $("#invoiceID").val();
var page = $("#invoiceholder");

$(document).ready(function() {
    var _export = document.querySelectorAll("#export");
    var _print  = document.querySelectorAll("#print");

    _export.forEach(element => {
        element.addEventListener('click',function(e){           
                convert();
        });
    });

    _print.forEach(element => {
        element.addEventListener('click',function(e){           
                print(div);
        });
    });
    

});
```
**Print**
```
function print(divName) {
    
    var contents = node.html();
        var frame1 = $('<iframe />');
        frame1[0].name = "frame1";
        frame1.css({ "position": "absolute", "top": "-1000000px" });
        $("body").append(frame1);
        var frameDoc = frame1[0].contentWindow ? frame1[0].contentWindow : frame1[0].contentDocument.document ? frame1[0].contentDocument.document : frame1[0].contentDocument;
        frameDoc.document.open();
        //Create a new HTML document.
        frameDoc.document.write('<html><head><title>DIV Contents</title>');
        frameDoc.document.write('</head><body>');
        //Append the external CSS file.
        frameDoc.document.write('<link href="../css/newstyle.css" rel="stylesheet" type="text/css" />');
        frameDoc.document.write('<link href="../css/bootstrap.min.css" rel="stylesheet" type="text/css" />');
        frameDoc.document.write('<link href="../css/bootstrap.css.map" rel="stylesheet" type="text/css" />');        
        frameDoc.document.write('<link href="../css/fontawesome.css" rel="stylesheet" type="text/css" />');
        //Append the DIV contents.
        frameDoc.document.write(contents);
        frameDoc.document.write('</body></html>');
        frameDoc.document.close();
        setTimeout(function () {
            window.frames["frame1"].focus();
            window.frames["frame1"].print();
            frame1.remove();
        }, 500);
 
}
```
**Convertion**
```
function convert(){
    $("#convertToText").hide();

    page.css("transform","scale("+ 1+")");

    html2canvas(div)
      .then((canvas) => {
        
        const imgData = canvas.toDataURL('../images/png');
        const pdf = new jsPDF({
          orientation: 'potrait',
        });
        const imgProps= pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('invoice_'+invoice_id+'.pdf');
        $("#convertToText").show();
      });
    
    
}
```