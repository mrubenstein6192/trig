$(document).ready(function() {
  window.scrollTo(0,0);
  $("#prompt").hide()
  $("#buttonChoices").hide();
  $("#practiceSides").hide();
  $("#practiceProblems").hide();

  $(document).on("click", ".start", function() {
    start();
  })

  function start() {
    console.log("Start");
    $("#welcome").hide();
    $("#prompt").show();
    $("#buttonChoices").show();


    $("#basics").on("click", function() {
      $("#buttonChoices").hide();
      console.log("Basics");
      $("#practiceSides").show();
      $("#practiceProblems").show();
      $("#seeBasics").hide();
    })

    $("#skipToProblems").on("click", function() {
      $("#buttonChoices").hide();
      console.log("Skip");
      $("#practiceProblems").show();
      $("#seeBasics").on("click", function() {
        $("#practiceSides").show();
      })
    })
  }
  
})