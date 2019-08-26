$(document).ready(function() {
  window.scrollTo(0,0);
  $("#prompt").hide()
  $("#buttonChoices").hide();
  $("#practiceSides").hide();
  $("#practiceProblems").hide();

  var problems = [
    {
      id: 1,
      pic: URL("./images/problem1.png"),
      question: "sin(x) = ",
      answer: 5/13
    },
    {
      id: 2,
      pic: URL("./images/problem2.png"),
      question: "sin(x) = ",
      answer: 7/25
    },
    {
      id: 3,
      pic: URL("./images/problem3.png"),
      question: "cos(x) = ",
      answer: 4/5
    },
    {
      id: 4,
      pic: URL("./images/problem4.png"),
      question: "tan(x) = ",
      answer: 4/3
    },
    {
      id: 5,
      pic: URL("./images/problem5.png"),
      question: "tan(x) = ",
      answer: 24/7
    },
    {
      id: 6,
      pic: URL("./images/problem6.png"),
      question: "cos(x) = ",
      answer: 5/13
    },
    {
      id: 7,
      pic: URL("./images/problem7.png"),
      question: "sin(x) = ",
      answer: 12/13
    },
    {
      id: 8,
      pic: URL("./images/problem8.png"),
      question: "tan(x) = ",
      answer: 12/5
    },
    {
      id: 9,
      pic: URL("./images/problem9.png"),
      question: "sin(x) = ",
      answer: 9/41
    },
    {
      id: 10,
      pic: URL("./images/problem10.png"),
      question: "cos(x) = ",
      answer: 9/41
    },
    {
      id: 11,
      pic: URL("./images/problem11.png"),
      question: "sin(x) = ",
      answer: 4/5
    },
    {
      id: 12,
      pic: URL("./images/problem12.png"),
      question: "tan(x) = ",
      answer: 3/4
    },
    {
      id: 13,
      pic: URL("./images/problem13.png"),
      question: "tan(x) = ",
      answer: 5/12
    },
    {
      id: 14,
      pic: URL("./images/problem14.png"),
      question: "sin(x) = ",
      answer: 12/13
    },
    {
      id: 15,
      pic: URL("./images/problem15.png"),
      question: "cos(x) = ",
      answer: 9/41
    },
    {
      id: 16,
      pic: URL("./images/problem16.png"),
      question: "sin(x) = ",
      answer: 24/25
    }
  ]

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