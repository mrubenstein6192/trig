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
  $("#secondProblems").hide();
  $("#algebra").hide()
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

    $secButton = $("<button type = 'submit'>Harder Problem</button>")
    $secButton.addClass("secSubmit");
    $("#harderProblemButton").html($secButton);
    $(".secSubmit").hide()
    

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
        $("#buttonAppear").html("✔");
        $(".secSubmit").show()
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

    $(".secSubmit").on("click", function() {
      $("#equation").hide();
      $("#checkButtons").hide();
      $("#algebra").hide();
      $("#thirdCheck").empty();
      
      console.log("second Button")
      $secButton.text("New Problem");
      $("#secondProblems").show();
      $("#infoStuff").show();
      $("#pictureGoesHere").show();
      var secRandInd = Math.floor(Math.random()*11) + 1
      console.log(trigProblems[secRandInd].id);
      console.log(trigProblems[secRandInd].question);

      var secProbImg = new Image(150, 150);
      secProbImg.classList.add("secPic");
      secProbImg.src = trigProblems[secRandInd].pic;
      $("#pictureGoesHere").html(secProbImg);
      $("#buttonsGoHere").empty();
      var trigButtons = ["sin", "cos", "tan"];
      for (var i = 0; i < trigButtons.length; i++) {
        var trigButton = $("<button>");
        trigButton.addClass("sinCosTan");
        trigButton.attr("value", trigButtons[i]);
        trigButton.text(trigButtons[i]);
        $("#buttonsGoHere").append(trigButton)
        }
        $(".sinCosTan").on("click", function() {
          console.log(this.value)
          
          $form3 = $("<form autocomplete = 'off'></form>");
          $form3.addClass("guessForm3");
          $form3.append("<span class = 'angle'><input class = 'angleInput' type = 'text' maxlength = '2' size = '2'></input></span>");

          $form4 = $("<form autocomplete = 'off'></form>");
          $form4.addClass("guessForm4 fraction ml-0 mt-2");
          $form4.append("<span class = 'fup'><input class = 'userNumerator' type = 'text' maxlength = '2' size = '2'></input></span>");
          $form4.append("<span class = 'bar my-3'></span>")
          $form4.append("<span class = 'fdn'><input class = 'userDenominator' type = 'text' maxlength = '2' size = '2'></input></span>");

          $button3 = $("<button type = 'submit'>Check Equation</button>")
          $button3.addClass("thirdSubmit")
          
          if (this.value == trigProblems[secRandInd].question) {
            console.log("correct");
            $("#buttonsGoHere").html("✔")
            $("#equation").show();
            
            $("#checkButtons").show();
            $("#equation").html(trigProblems[secRandInd].question + "( ");
            $("#equation").append($form3);
            $("#equation").append(" ) = ");
            $("#equation").append($form4);
            $("#checkButtons").html($button3);

            $(".thirdSubmit").on("click", function() {
              var userAngle = $(".angleInput").val();
              var userNumer = $(".userNumerator").val();
              var userDenom = $(".userDenominator").val();
              console.log(userAngle, userNumer, userDenom);

              if (userAngle == trigProblems[secRandInd].angle && userNumer == trigProblems[secRandInd].numerator && userDenom == trigProblems[secRandInd].denominator){
                $("#buttonsGoHere").append("✔")
                $("#checkButtons").empty();
                $("#algebra").show();
                $("#algebra").html("Algebra Time!" + "<br>" + "Cross Multiply and Solve!" + "<br>" + trigProblems[secRandInd].question + "(")
                $("#algebra").append(trigProblems[secRandInd].angle);
                $("#algebra").append(") is really just a number! Use a calculator and treat it like any other number in an equation!" + "<br>" + "<i>Round to 2 decimal places</i>")
                $("#thirdCheck").html("<div class='fraction mt-2 mr-3'><span class = 'fup'>" + trigProblems[secRandInd].question + "(" + trigProblems[secRandInd].angle + ")" + "</span><span class = 'bar'>/</span><span class = 'fdn'>1");
                $("#thirdCheck").append("= ");
                $("#thirdCheck").append(" <div class='fraction mt-2 mr-3'><span class='fup'>" + trigProblems[secRandInd].numerator + "</span><span class='bar'>/</span><span class='fdn'>" + trigProblems[secRandInd].denominator + "</span></div>");
                $("#thirdCheck").append("<br>");
                $("#thirdCheck").append("x = ")
                $form5 = $("<form autocomplete = 'off'</form>");
                $form5.addClass('finalAnswer');
                $form5.append("<span class = 'lastInput'><input class = 'lastAnswer' type = 'text' maxlength = '5' size = '4'></input></span>");
                $("#thirdCheck").append($form5);

                $button4 = $("<button type = 'submit'>Submit</button>")
                $button4.addClass("ml-3 fourthSubmit")
                $("#thirdCheck").append($button4);

                $(".fourthSubmit").on("click", function() {
                  console.log("Last Submit!");
                  var userAnswer = $(".lastAnswer").val();
                  if (userAnswer == trigProblems[secRandInd].sol1 || userAnswer == trigProblems[secRandInd].sol2) {
                    $("#sorry").empty();
                    $("#thirdCheck").append("✔");
                    $("#thirdCheck").append("<br>" + "Awesome Job! Try Another!");
                  }
                  else {
                    $("#thirdCheck").append("<br>" + "<div id ='sorry'></div>")
                    $("#sorry").empty();
                    $("#sorry").append("Sorry that is incorrect.  Try again!")
                  }
                })
              }
              else {
                $("#checkButtons").append(" Sorry, try again");
                $(".angleInput").val("");
                $(".userNumerator").val("");
                $(".userDenominator").val("");
              }
            })
          }
          else {
            $("#buttonsGoHere").append("✘");
          }
        })

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

  var trigProblems = [
    {
      id: 0,
      pic: "./secondImages/question1.png",
      question: "cos",
      angle: 72,
      numerator: 6,
      denominator: "x",
      sol1: 19.42,
      sol2: 19.35
    },
    {
      id: 1,
      pic:  "./secondImages/question2.png",
      question: "cos",
      angle: 73,
      numerator: "x",
      denominator: 6,
      sol1: 1.85,
      sol2: 1.86
    },
    {
      id: 2,
      pic:  "./secondImages/question3.png",
      question: "tan",
      angle: 24,
      numerator: "x",
      denominator: 12,
      sol1: 5.34,
      sol2: 5.40
    },
    {
      id: 3,
      pic:  "./secondImages/question4.png",
      question: "tan",
      angle: 37,
      numerator: "x",
      denominator: 12,
      sol1: 9.04,
      sol2: 9
    },
    {
      id: 4,
      pic:  "./secondImages/question5.png",
      question: "tan",
      angle: 55,
      numerator: 29,
      denominator: "x",
      sol1: 20.31,
      sol2: 20.28
    },
    {
      id: 5,
      pic:  "./secondImages/question6.png",
      question: "tan",
      angle: 68,
      numerator: "x",
      denominator: 21,
      sol1: 51.98,
      sol2: 52.08
    },
    {
      id: 6,
      pic:  "./secondImages/question7.png",
      question: "sin",
      angle: 19,
      numerator: "x",
      denominator: 29,
      sol1: 9.44,
      sol2: 9.57
    },
    {
      id: 7,
      pic:  "./secondImages/question8.png",
      question: "sin",
      angle: 21,
      numerator: "x",
      denominator: 22,
      sol1: 7.88,
      sol2: 7.92
    },
    {
      id: 8,
      pic:  "./secondImages/question9.png",
      question: "sin",
      angle: 33,
      numerator: "x",
      denominator: 29,
      sol1: 15.79,
      sol2: 15.66
    },
    {
      id: 9,
      pic:  "./secondImages/question10.png",
      question: "sin",
      angle: 45,
      numerator: 35,
      denominator: "x",
      sol1: 49.5,
      sol2: 49.3
    },
    {
      id: 10,
      pic:  "./secondImages/question11.png",
      question: "cos",
      angle: 47,
      numerator: 28,
      denominator: "x",
      sol1: 41.06,
      sol2: 41.18
    },
    {
      id: 11,
      pic:  "./secondImages/question12.png",
      question: "cos",
      angle: 59,
      numerator: 34,
      denominator: "x",
      sol1: 66.01,
      sol2: 65.38
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