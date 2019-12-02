setInterval(function()  {
  // var i;
  // var slides = document.getElementsByTagName("img"); 
  // var dots = document.getElementsByTagName("li");
  var img_idx = $('img.active').index()

  $(".slideshow img.active")
    .removeClass("active")
    .next()
    .addClass("active")
    .end();

  if (img_idx == 4) {
    $(".slideshow li").removeClass("active")
    $(".slideshow img:nth-child(1)").addClass("active")
  }  

  var idx = $('li.active').index()

  $(".indicator li.active")
    .removeClass("active")
    .next()
    .addClass("active")
    .end();

  if (idx == 4) {
    $(".indicator li").removeClass("active")
    $(".indicator li:nth-child(1)").addClass("active")
  }}, 3000);
  
  $(".indicator li:nth-child(1)").click(function(){
    $(".indicator li").removeClass("active")
    $(".indicator li:nth-child(1)").addClass("active")
    $(".slideshow img").removeClass("active")
    $("img:nth-child(1)").addClass("active")
  });

  $(".indicator li:nth-child(2)").click(function(){
    $(".indicator li").removeClass("active")
    $(".indicator li:nth-child(2)").addClass("active")
    $(".slideshow img").removeClass("active")
    $("img:nth-child(2)").addClass("active")
  });
  
  $(".indicator li:nth-child(3)").click(function(){
    $(".indicator li").removeClass("active")
    $(".indicator li:nth-child(3)").addClass("active")
    $(".slideshow img").removeClass("active")
    $("img:nth-child(3)").addClass("active")
  });

  $(".indicator li:nth-child(4)").click(function(){
    $(".indicator li").removeClass("active")
    $(".indicator li:nth-child(4)").addClass("active")
    $(".slideshow img").removeClass("active")
    $("img:nth-child(4)").addClass("active")
  });

  $(".indicator li:nth-child(5)").click(function(){
    $(".indicator li").removeClass("active")
    $(".indicator li:nth-child(5)").addClass("active")
    $(".slideshow img").removeClass("active")
    $("img:nth-child(5)").addClass("active")
  });
