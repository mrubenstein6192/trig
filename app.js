$(document).ready(function() {
  window.scrollTo(0,0);
  $("#prompt").hide()

  $(document).on("click", ".start", function() {
    start();
  })

  function start() {
    console.log("Start");
    $("#welcome").hide();
    $("#prompt").show();


  }
  
})