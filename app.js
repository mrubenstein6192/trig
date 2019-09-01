$(document).ready(function() {
  window.scrollTo(0,0);
  $("#prompt").hide()
  $("#buttonChoices").hide();
  $("#practiceSides").hide();
  $("#practiceProblems").hide();
  $("#randomProblem").hide();
  $("#fractionInput").hide();

  var problems = [
    {
      id: 1,
      pic: './images/problem1.png',
      question: "sin(x) = ",
      answer: 5/13
    },
    {
      id: 2,
      pic: ("./images/problem2.png"),
      question: "sin(x) = ",
      answer: 7/25
    },
    {
      id: 3,
      pic: ("./images/problem3.png"),
      question: "cos(x) = ",
      answer: 4/5
    },
    {
      id: 4,
      pic: ("./images/problem4.png"),
      question: "tan(x) = ",
      answer: 4/3
    },
    {
      id: 5,
      pic: ("./images/problem5.png"),
      question: "tan(x) = ",
      answer: 24/7
    },
    {
      id: 6,
      pic: ("./images/problem6.png"),
      question: "cos(x) = ",
      answer: 5/13
    },
    {
      id: 7,
      pic: ("./images/problem7.png"),
      question: "sin(x) = ",
      answer: 12/13
    },
    {
      id: 8,
      pic: ("./images/problem8.png"),
      question: "tan(x) = ",
      answer: 5/12
    },
    {
      id: 9,
      pic: ("./images/problem9.png"),
      question: "sin(x) = ",
      answer: 9/41
    },
    {
      id: 10,
      pic: ("./images/problem10.png"),
      question: "cos(x) = ",
      answer: 9/41
    },
    {
      id: 11,
      pic: ("./images/problem11.png"),
      question: "sin(x) = ",
      answer: 4/5
    },
    {
      id: 12,
      pic: ("./images/problem12.png"),
      question: "tan(x) = ",
      answer: 3/4
    },
    {
      id: 13,
      pic: ("./images/problem13.png"),
      question: "tan(x) = ",
      answer: 5/12
    },
    {
      id: 14,
      pic: ("./images/problem14.png"),
      question: "sin(x) = ",
      answer: 12/13
    },
    {
      id: 15,
      pic: ("./images/problem15.png"),
      question: "cos(x) = ",
      answer: 9/41
    },
    {
      id: 16,
      pic: ("./images/problem16.png"),
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
      $("#randomProblem").show();
    })

    $("#skipToProblems").on("click", function() {
      $("#buttonChoices").hide();
      console.log("Skip");
      $("#practiceProblems").show();
      $("#seeBasics").on("click", function() {
        $("#practiceSides").show();
      })
    })

    $(".nextProblem").on("click", function() {
      
      showQuestion();

      function showQuestion() {
      $("#newProblem").hide();
      $("#firstButton").hide();
      var randIndex = Math.floor(Math.random() * 15) + 1
      console.log(randIndex);
      console.log(problems[randIndex].question)
      console.log(problems[randIndex].answer)
      
      $(".first").val("");
      $(".second").val("");
      var problemImage = new Image(150,150);
      problemImage.src = problems[randIndex].pic
      $("#problemPrint").html(problemImage);
      $("#fractionInput").show();
      $("#showProb").html(problems[randIndex].question)
      $(".first").focus();
      $("#response").hide();

      $form = $("<form autocomplete = 'off'></form>");
      $form.addClass("guessForm1 fraction ml-0 mt-2");
      $form.append("<span class = 'fup'><input class = 'first' type = 'text' maxlength = '2' size = '2'></input></span>");
      $form.append("<span class = 'bar my-1'></span>")
      // $form2 = $("<form autocomplete = 'off'></form>");
      // $form2.addClass("guessForm2 fraction ml-0 mt-2");
      $form.append("<span class = 'fdn'><input class = 'second' type = 'text' maxlength = '2' size = '2'></input></span>");
      $("#fractionAppear").html($form)
      
      $button = $("<button type = 'submit'>Submit</button>")
      $button.addClass("submitGuess")
      $("#buttonAppear").html($button);
      

      $(".submitGuess").on("click", function() {
      
        console.log("This submitted");
        let numerator = $(".first").val();
        console.log("You said: " + numerator);
        let denominator = $(".second").val();
        console.log("You said: " + denominator);
        let quotient = numerator / denominator;
        console.log("Which gives: " + quotient);
        console.log("The answer is: " + problems[randIndex].answer);
        
        if (quotient === problems[randIndex].answer) {
        
          // showQuestion()
          $("#response").show();
          $("#response").html("Correct! Try another?");
          $("#newProblem").show();
          console.log("Numerator: " + numerator + " | Denominator: " + denominator );
        }
        else {
          $("#response").show();
          $("#response").html("Sorry that is incorrect. Try again!")
          $(".first").val('');
          $(".second").val('');
          $(".first").focus();
        }
      })
    }
    })
    
    }
    
  
  
})