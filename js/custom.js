
$(document).ready(function() {


    updatePrice();

    $("#save").click(function() {
        $("#invoice-form").submit();
    
    });


    $("#addrow").click(function(){

    });

   

 });

function calculateTotal(price,advPercent){
    var totalAmount = price;
    var advanceAmount =( advPercent/100) *  totalAmount ;
    var finalAmount = totalAmount - advanceAmount;

    $("#totalamount").text(totalAmount);
    $("#advanceamount").text(advanceAmount) ;
    $("#finalamount").text(finalAmount);
}


 function updatePrice(){
    

    var totalPrice = 0;
    
    var qty = $("#qty");
    var price = $("#price");
    var cost = qty.val() * $("#price").val();
    $("#cost").text(cost);
    calculateTotal(cost,30);
        
    requestAnimationFrame(updatePrice);
 }

