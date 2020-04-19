$(document).ready(function() {  });
setInterval(() => {
  translate(); 
}, 5000);
   

function translate(){
    var data = null;
    var number = $("#totalamount").text();
    
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            
            var responseText = JSON.parse(this.responseText);
           
            var text = responseText.contents;
            $("#inwords").attr("value",text["translated"]);
           
        }
    });
    
    xhr.open("GET", "https://numbers-spell.p.rapidapi.com/numbers?text="+number);
    xhr.setRequestHeader("x-rapidapi-host", "numbers-spell.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "6ca6807e19msh5d007a08cb99dbfp162df9jsna652f809f1d5");
    xhr.setRequestHeader("x-funtranslations-api-secret", "");
    
    xhr.send(data);
}
