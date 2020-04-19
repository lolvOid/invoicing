
 $("#cost").text(0);
$(document).ready(function() {


    

    $("#save").click(function() {
        $("#invoice-form").submit();
    
    });


    $("#addrow").click(function(){

    });

    updatePrice();

 });


 function updatePrice(){
        

    var totalPrice = 0;
    
    var qty = $("#qty");
    var price = $("#price");
    qty.keyup(function(){
        price.keyup(function(){
            var cost = qty.val() * $("#price").val();
            $("#cost").text(cost);
        })
    })
    
 }


