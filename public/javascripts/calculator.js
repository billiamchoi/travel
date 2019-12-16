"use strict";

function recalculate() {
  var sum = 0;
  $("#tab tbody tr").each(function(idx, row) {
    var $el = $(row);
    console.log($el)
    var unitPrice = parseInt($el.find(".unit-price").val(), 10);
    console.log(unitPrice)
    var qty = parseInt($el.find(".qty").val(), 10);
    console.log(qty)
    if (true ) {
      var price =  qty * unitPrice;
      $el.find(".price").text(price);
      sum = sum + price;
    }
  });
  $("#sum").text(sum);
}

function initCalculator() {

  $('#confirm').click(function() {
    recalculate();
    
  });
  
}

