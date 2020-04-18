import htmlToImage  from '../node_modules/html-to-image/lib/index.js';

    var element = document.querySelector("#invoiceholder"); // global variable

    $("#btn-Preview-Image").on('click', function () {


        htmlToImage.toPng(element)
        .then(function (dataUrl) {
          var img = new Image();
          img.src = dataUrl;
          $("#previewImg").$(content).appendTo(selector);(img);
        })
        .catch(function (error) {
          console.error('oops, something went wrong!', error);
        });        
    }); 
 
     $("#export").on('click', function() { 
       
 
     }); 
 