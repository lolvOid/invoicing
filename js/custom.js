var page = $("#invoiceholder");

var scale = Math.min(100/page.width(),100/page.height());
// var defaultzoom = 0.4;


$(document).ready(function() {

   
    zoom(defaultzoom);
    update();

    var _save =document.querySelectorAll("#save");

    _save.forEach(element => {
        element.addEventListener('click',function(e){           
            $("#invoice-form").sin
        });
    });
    
    $("#addrow").click(function(){

    });

 });


function zoom(value){
   
        page.css("transform","scale("+ value+")");
        $("#zoomin").click(function(){
            
            if(value<0.8){
                value +=scale;              
                page.css("transform","scale("+ value+")");
                console.log(value);
            }
        });
   
        $("#zoomout").click(function(){      
            if(value >=0.45){
                value -=scale;      
                page.css("transform","scale("+ value+")");      
                console.log(value);
            }
        });
    
}


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
        $("#attentionname").attr("placeholder",( $("#attention").attr("placeholder")));    
    }else{
        $("#attentionname").attr("value",$("#attention").val());
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

 const slider = document.querySelector('.wrapper');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});
//  (function(){
//     var curYPos, curXPos, curDown;
  
//     window.addEventListener('mousemove', function(e){ 
//       if(curDown){
//         window.scrollBy(curXPos - e.pageX, curYPos - e.pageY);
//       }
//     });
  
//     window.addEventListener('mousedown', function(e){ 
//       curYPos = e.pageY; 
//       curXPos = e.pageX; 
//       curDown = true; 
//     });
  
//     window.addEventListener('mouseup', function(e){ 
//       curDown = false; 
//     });
//   })()

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })