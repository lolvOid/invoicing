var page = $("#invoiceholder");

var scale = Math.min(100/page.width(),100/page.height());
var defaultzoom = 1;

$(document).ready(function() {

   
    zoom(defaultzoom);
    update();

    var _save =document.querySelectorAll("#save");

    _save.forEach(element => {
        element.addEventListener('click',function(e){           
            $("#invoice-form").submit();
        });
    });
    
    $("#addrow").click(function(){

    });

 });


function zoom(value){
   
        page.css("transform","scale("+ value+")");
        $("#zoomin").click(function(){
          
            if(value<1.5){
                value +=scale;              
                page.css("transform","scale("+ value+")");
            
            }
        });
   
        $("#zoomout").click(function(){      
            if(value >=1){
                value -=scale;      
                page.css("transform","scale("+ value+")");      
               
            }
        });
    
}


function update(){
    updateCurrency();
    updatePrice();
    updateName();
    requestAnimationFrame(update);
}

function updateName(){
    if($("#clientname").val()==''){
        $("#clientname2").text("( "+ $("#clientname").attr("placeholder") + " )");    
    }else{
        $("#clientname2").text("( "+$("#clientname").val()+" )");
    }
    if($("#attention").val()==''){
        $("#attentionname").attr("placeholder",( $("#attention").attr("placeholder")));    
    }else{
        $("#attentionname").attr("value",$("#attention").val());
    }

    

}


function calculateTotal(price = [],advPercent){
    var totalAmount = 0;
    
    for(var i in price){
        totalAmount += price[i];
    }
    
    var advanceAmount =( advPercent/100) *  totalAmount ;
    var finalAmount = totalAmount - advanceAmount;
    var cost 
    $("#totalamount").text(totalAmount);
    $("#advanceamount").text(advanceAmount) ;
    $("#finalamount").text(finalAmount);
}



function updatePrice(){
    var costText = document.querySelectorAll("#cost");

    var totalPrice = 0;
    
    var qty = document.querySelectorAll("#qty");
    var price = document.querySelectorAll("#price");
   // var cost = qty.val() * $("#price").val();
   var cost = [6];

   for(var i = 0; i < qty.length ; i++){
       cost[i] = qty[i].value * price[i].value ;
       costText[i].innerHTML = (cost[i]);
   }
    
    // $("#cost").text(cost);
    calculateTotal(cost,30);

 }



$('[data-toggle="tooltip"]').tooltip();


function updateCurrency(){

    var curr =document.querySelectorAll("#currency");

   
    $("#mmk").click(function(){
        curr.forEach(element => {
            element.innerHTML = "MMK";
        });
    });

    $("#usd").click(function(){
        curr.forEach(element => {
            element.innerHTML = "$";
        });
    });


}
