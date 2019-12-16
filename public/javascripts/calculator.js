"use strict";

function recalculate() {
  var sum = 0;
  var tot = 1;
  $("#tab tbody tr").each(function(idx, row) {
    var $el = $(row);
    console.log($el)
    var unitPrice = parseInt($el.find(".unit-price").val(), 10);
    console.log(unitPrice)
    var qty = parseInt($el.find(".qty").val(), 10);
    console.log(qty)
    
    var price =  qty * unitPrice;
    if (qty > 5){
      var price =  (qty * unitPrice)/2;
      
    }
    
    $el.find(".price").text(price);
    sum = sum + price;
    $el.find(".qty").text(qty);
    tot = qty

    
  });
  $("#total").text(sum);
  $("#qty").text(tot);
  $("#number_of_people").val(tot);
  $("#total").val(sum);
}

function initCalculator() {

  $('#confirm').click(function() {
    recalculate();
    
  });
  
}

