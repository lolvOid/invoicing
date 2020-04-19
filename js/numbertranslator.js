var data = null;
$("#inwords").attr("readonly","true");
$(document).ready(function() { translate();});

function translate(){
   
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
    xhr.setRequestHeader("x-rapidapi-key", "bae8ac0f06mshb1c40c0f1358dabp196ffdjsn235588ef714c");
    xhr.setRequestHeader("x-funtranslations-api-secret", "");
    
    xhr.send(data);

    requestAnimationFrame(translate());
}
