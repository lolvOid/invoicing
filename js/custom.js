
$(document).ready(function() {

    update();

    $("#save").click(function() {
        $("#invoice-form").submit();
    
    });


    $("#addrow").click(function(){

    });

   

 });



function update(){

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
        $("#attentionname").attr("placeholder",("( "+ $("#attention").attr("placeholder") + " )"));    
    }else{
        $("#attentionname").attr("value","( "+$("#attention").val()+" )");
    }

    

}


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

 }

