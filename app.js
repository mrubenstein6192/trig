$(document).ready(function() {
  window.scrollTo(0,0);
  $("#prompt").hide()
  $("#buttonChoices").hide();
  $("#practiceSides").hide();
  $("#practiceProblems").hide();
  $("#randomProblem").hide();
  $("#fractionInput").hide();
  $(".nextProblem").hide();
  $(".nextProblem2").hide();
  // $("#showFirstProblemAgain").hide();
  function showQuestion() {
    $(".newProblem").hide();
    $(".showinfo").hide();
    $(".nextProblem").hide();
    // $("#firstButton").hide();
    var randIndex = Math.floor(Math.random() * 15) + 1
    console.log(randIndex);
    console.log(problems[randIndex].question)
    console.log(problems[randIndex].answer)
    
    $(".first").val("");
    $(".second").val("");
    var problemImage = new Image(150,150);
    problemImage.classList.add("thisPic");
    problemImage.src = problems[randIndex].pic
    $("#problemPrint").html(problemImage);
    $("#fractionInput").show();
    $("#showProb").html(problems[randIndex].question)
    $(".first").focus();
    $("#response").hide();

    $form2 = $("<form autocomplete = 'off'></form>");
    $form2.addClass("guessForm2 ml-0 mt-2 text-right");
    $form2.append("<div id = optional>(Optional)</div><br>")
    $form2.append("<div id = oppCheck>Opposite: <span class = 'fup my-1'><input class = 'opp' type = 'text' maxlength = '2' size = '2'></input></span></div>");
    $form2.append("<div id = adjCheck>Adjacent: <span class = 'fup my-1'><input class = 'adj' type = 'text' maxlength = '2' size = '2'></input></span></div>");
    $form2.append("<div id = hypCheck>Hypotenuse: <span class = 'fup my-1'><input class = 'hyp' type = 'text' maxlength = '2' size = '2'></input></span></div>");
    $("#showSides").html($form2)

    $form = $("<form autocomplete = 'off'></form>");
    $form.addClass("guessForm1 fraction ml-0 mt-2");
    $form.append("<span class = 'fup'><input class = 'first' type = 'text' maxlength = '2' size = '2'></input></span>");
    $form.append("<span class = 'bar my-3'></span>")
    // $form2 = $("<form autocomplete = 'off'></form>");
    // $form2.addClass("guessForm2 fraction ml-0 mt-2");
    $form.append("<span class = 'fdn'><input class = 'second' type = 'text' maxlength = '2' size = '2'></input></span>");
    $("#fractionAppear").html($form)
    
    $button = $("<button type = 'submit'>Submit</button>")
    $button.addClass("submitGuess")
    $("#buttonAppear").html($button);
    

    $(".submitGuess").on("click", function() {
      let opp = $(".opp").val();
      console.log("You said opp is: " + opp);
      let adj = $(".adj").val();
      console.log("You said adj is: " + adj);
      let hyp = $(".hyp").val();
      console.log("You said hyp is: " + hyp);
      console.log("This submitted");

      let numerator = $(".first").val();
      console.log("You said: " + numerator);
      let denominator = $(".second").val();
      console.log("You said: " + denominator);
      let quotient = numerator / denominator;
      console.log("Which gives: " + quotient);
      console.log("The answer is: " + problems[randIndex].answer);

      if (opp == problems[randIndex].opposite) {
        $("#oppCheck").css("color", "green");
      }
      else{
        $("#oppCheck").css("color","red");
        $(".opp").val("")
      }
      if (adj == problems[randIndex].adjacent) {
        $("#adjCheck").css("color", "green");
      }
      else{
        $("#adjCheck").css("color","red");
        $(".adj").val("")
      }
      if (hyp == problems[randIndex].hypotenuse) {
        $("#hypCheck").css("color", "green");
      }
      else{
        $("#hypCheck").css("color","red");
        $(".hyp").val("")
      }
      
      if (quotient === problems[randIndex].answer) {
      
        // showQuestion()
        $("#response").show();
        $("#response").html("Correct! Click 'New Problem' for Another!");
        $("#response").css("color", "green").css("text-transform", "uppercase").css("font-weight", "bold");
        $("#newProblem").show();
        $(".nextProblem").show();
        console.log("Numerator: " + numerator + " | Denominator: " + denominator );
        $("#buttonAppear").html("✔")
      }
      else {
        $("#response").show();
        $("#response").html("Sorry that is incorrect. Try again!")
        $("#response").css("color", "red").css("text-transform", "uppercase").css("font-weight", "bold");
        $(".first").val('');
        $(".second").val('');
        $(".first").focus();
      }
    })
  }
  var problems = [
    {
      id: 1,
      pic: './images/problem1.png',
      question: "sin(x) = ",
      opposite: 5,
      adjacent: 12,
      hypotenuse: 13,
      answer: 5/13
    },
    {
      id: 2,
      pic: ("./images/problem2.png"),
      question: "sin(x) = ",
      opposite: 7,
      adjacent: 24,
      hypotenuse: 25,
      answer: 7/25
    },
    {
      id: 3,
      pic: ("./images/problem3.png"),
      question: "cos(x) = ",
      opposite: 3,
      adjacent: 4,
      hypotenuse: 5,
      answer: 4/5
    },
    {
      id: 4,
      pic: ("./images/problem4.png"),
      question: "tan(x) = ",
      opposite: 4,
      adjacent: 3,
      hypotenuse: 5,
      answer: 4/3
    },
    {
      id: 5,
      pic: ("./images/problem5.png"),
      question: "tan(x) = ",
      opposite: 24,
      adjacent: 7,
      hypotenuse: 25,
      answer: 24/7
    },
    {
      id: 6,
      pic: ("./images/problem6.png"),
      question: "cos(x) = ",
      opposite: 12,
      adjacent: 5,
      hypotenuse: 13,
      answer: 5/13
    },
    {
      id: 7,
      pic: ("./images/problem7.png"),
      question: "sin(x) = ",
      opposite: 12,
      adjacent: 5,
      hypotenuse: 13,
      answer: 12/13
    },
    {
      id: 8,
      pic: ("./images/problem8.png"),
      question: "tan(x) = ",
      opposite: 5,
      adjacent: 12,
      hypotenuse: 13,
      answer: 5/12
    },
    {
      id: 9,
      pic: ("./images/problem9.png"),
      question: "sin(x) = ",
      opposite: 9,
      adjacent: 40,
      hypotenuse: 41,
      answer: 9/41
    },
    {
      id: 10,
      pic: ("./images/problem10.png"),
      question: "cos(x) = ",
      opposite: 40,
      adjacent: 9,
      hypotenuse: 41,
      answer: 9/41
    },
    {
      id: 11,
      pic: ("./images/problem11.png"),
      question: "sin(x) = ",
      opposite: 4,
      adjacent: 3,
      hypotenuse: 5,
      answer: 4/5
    },
    {
      id: 12,
      pic: ("./images/problem12.png"),
      question: "tan(x) = ",
      opposite: 3,
      adjacent: 4,
      hypotenuse: 5,
      answer: 3/4
    },
    {
      id: 13,
      pic: ("./images/problem13.png"),
      question: "tan(x) = ",
      opposite: 5,
      adjacent: 12,
      hypotenuse: 13,
      answer: 5/12
    },
    {
      id: 14,
      pic: ("./images/problem14.png"),
      question: "sin(x) = ",
      opposite: 12,
      adjacent: 5,
      hypotenuse: 13,
      answer: 12/13
    },
    {
      id: 15,
      pic: ("./images/problem15.png"),
      question: "cos(x) = ",
      opposite: 40,
      adjacent: 9,
      hypotenuse: 41,
      answer: 9/41
    },
    {
      id: 16,
      pic: ("./images/problem16.png"),
      question: "sin(x) = ",
      opposite: 24,
      adjacent: 7,
      hypotenuse: 25,
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
    $(".nextProblem").hide();
    $("#buttonChoices").show();


    $("#basics").on("click", function() {
      $("#buttonChoices").hide();
      console.log("Basics");
      $("#practiceSides").show();
      $("#practiceProblems").show();
      $("#seeBasics").hide();
      $("#randomProblem").show();
      $(".showInfo").hide();
      $(".nextProblem").show();
      $("#newProblem").hide();
    })

    $("#skipToProblems").on("click", function() {
      // $("#buttonChoices").hide();
      $("#skipToProblems").hide();
      $(".nextProblem").show();
      console.log("Skip");
     showQuestion();
      $("#seeBasics").on("click", function() {
        $("#practiceSides").show();
      })
    })

    $(".hideInfo").on("click", function() {
      $("#hideThis").hide();
      $("#showFirstProblem").show();
      $(".hideInfo").hide()
      $(".showInfo").show();
    })

    $(".showInfo").on("click", function() {
      $("#hideThis").show();
      $(".showInfo").hide();
      $(".hideInfo").show();
    })

    $(".nextProblem").on("click", function() {
      
      showQuestion();

     
    })
    
    }
    
  
  
})