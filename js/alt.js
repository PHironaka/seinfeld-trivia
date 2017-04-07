

/////////////////////////////////
//       Global Variables     //
//////////////////////////////

 var theBody = $('body'); // body
 var theContainer = $('.container'); // container class
 var scoreCorrect = $('.score-correct'); // correct score class
 var scoreIncorrect = $('.score-incorrect'); // incorrect score class
 var icon = document.getElementById("icon"); // gets #icon div iD element
 var icon1 = document.getElementById("a"); // gets #a div iD element
 var icon2 = document.getElementById("b"); // gets #b div iD element
 var icon3 = document.getElementById("c"); // gets #c div iD element
 var nav = document.getElementById('nav'); // gets #nav div iD element
 var game = {  // variable to store player info
     player1: {marker: "Chris ", score: 0, turn: true },
     player2: {marker: "Dave ", score: 0, turn: false }
   }

 var currentPlayer = game.player1;
 var choice = $('.choice');

 /////////////////////////////////
 // Pop up hamburger button   //
 //////////////////////////////
 // Overlay fade out on load
   icon.addEventListener('click', function() { // adding a click event listener on the icon
   icon1.classList.toggle('a'); // applying that event listener to #a
   icon2.classList.toggle('c'); // applying that event listener to #b
   icon3.classList.toggle('b'); // applying that event listener to #c
   nav.classList.toggle('show'); // applying that event listener to #show
 });

 /////////////////////////////////
 //   q/a/image object array  //
 //////////////////////////////

 var seinfeldOne = {
   question: 'What is Kramers real first name?',
   choice1: 'Chris',
   choice2: 'Cosmo',
   choice3: 'Michael',
   choice4: 'Blake',
   answer: 'Cosmo',
   info: "<img  class= 'img-responsive' width=400 src='https://s-media-cache-ak0.pinimg.com/736x/9c/15/56/9c155660ff8014a32ac8bc8b2b344ec9.jpg'>"
 };

 var seinfeldTwo = {
   question: 'What is the name of the Gated Community Jery and Georges parents move to?',
   choice1: 'Palm Condos',
   choice2: 'Pelican Way',
   choice3: 'Del Boca Vista',
   choice4: 'Panama Canals',
   answer: 'Del Boca Vista',
   info: "<img  class= 'img-responsive' width=400 src='http://vignette1.wikia.nocookie.net/seinfeld/images/8/86/TheFrogger.jpg/revision/latest?cb=20110826182700'>"
 };


 var seinfeldThree = {
   question: 'What are the names of Elaines bizarro friends?',
   choice1: 'Herman, Sal, Matthew',
   choice2: 'Kevin, Gene, Feldman',
   choice3: 'Elmo, Sid, Robert',
   choice4: 'Michael, Alonzo, Martin',
   answer: 'Kevin, Gene, Feldman',
   info: "<img  class= 'img-responsive' width=400 src='http://kramersapartment.com/wp-content/uploads/jack-klompus-the-cadillac-seinfeld-1.jpg'>"
 };

 var seinfeldFour = {
   question: 'What are the names of Elaines bizarro friends?',
   choice1: 'Herman, Sal, Matthew',
   choice2: 'Kevin, Gene, Feldman',
   choice3: 'Elmo, Sid, Robert',
   choice4: 'Michael, Alonzo, Martin',
   answer: 'Kevin, Gene, Feldman',
   info: "<img  class= 'img-responsive' width=400 src=''>"
 };


 var triviaQuestion = [seinfeldOne,seinfeldTwo,seinfeldThree, seinfeldFour]; // variables of each trivia question
 var questions = []; // empty array for questions
 var num =0; // number that gets counted down towards
 var time =10; // starting point number
 var numberCorrect = 0; // starting point of number of correct answers
 var numberWrong = 0; //
 var numTimeout = 0; // Time out for each question
 var timer = $('.timer'); // variable for the time remaining countdown timer


 /////////////////////////////////
 ////       Appendages      ////
 //////////////////////////////
 theBody.append(theContainer); //appending the container to the body

 // $( document ).ready(function() {

  //////////////////////
 //    Functions    //
  ////////////////////


// TESTING FUNCTIONS:

// Reset button
 //  function clear() {
 //   $display.val("");
 // }
 // theContainer.show("#clear").on("click", clear);
 // $("#clear").hide();


  $(".startButton").click(function(){ // begins the quiz
    questions = triviaQuestion;
    nextquestion();
     $(".startButton").hide(); // hide the start button once the game begins
  })


  function nextquestion() { // Function #3: Set the time of each question being asked
    time = 10; // Five Seconds of time per question
    counter = setInterval(increment, 1000); // The counter for each interval is on a one per second interval
    $(".timer").html("<h2>Time Remaining: " + time + "</h2>"); // Create an H2 signifying the amount of time remaining on the question
    $(".question").html(questions[num].question); // here is the question
    $(".ans1").html(questions[num].choice1 ); // here is the first possible answer
    $(".ans2").html(questions[num].choice2 ); // here is the second possible answer
    $(".ans3").html(questions[num].choice3); // here is the third possible answer
    $(".ans4").html(questions[num].choice4 ); // here is the fourth possible answer
    $(".info").empty(); // strips child node from the info property
    playTurn();
     $(".startButton").hide();
  };


  function increment() { // Function #4: countdown timer function
    time-- // decrease time by an increment of 1
    timer.html("<h2>Time Remaining: " + time + "</h2>")
    if (time == 0) { // if timer is equal to 1
      timeout(); // return timer
      stop(); // Stop the currently-running animation on the matched elements.
      $(".choice").empty(); //strip the possible answers from the list
    }
    else if (time < 5) { // and if the time is less than 5...
      timer.parent().parent().parent().addClass("red"); // add a class red
      setTimeout(function(){timer.parent().parent().parent().removeClass("red")},500) // timing interval: adding a new class on the last 5 seconds of the timer
    };
  };


  function stop() { // stops & clears the current question
    clearInterval(counter);
    num++;

    if (num >= questions.length) {
      setTimeout(endgame,3000);
    }
    else {
      setTimeout(nextquestion,4000);
    };
  };

  $(".choice").click(function() { // Click Event listener to see which answer the user clicks
      playTurn();
      if($(this).text() == questions[num].answer) { //if the answer chosen lines up with the question's correct answer

        numberCorrect++; // add it to the talley of correct scores answered
        correctanswer(); // correct answer function applied
        scoreCorrect.text(currentPlayer.marker + 'correct: ' + numberCorrect); // text to signify the correct score
        stop(); //stops method on matched elements
      }

      else { // otherwise, use the same click event listener if the answer provided is wrong
        wronganswer(console.log("answer is wrong.")); // console log test to see if it's wrong
        scoreIncorrect.text(currentPlayer.marker + 'wrong: ' + numberWrong); // text element to signify the wrong answer has been provided
        stop();
      };

      function renderButton() {
        var choices = [];
        console.log('ready!');

        $('.choice').empty();

        for (i = 0;i<choices.length; i++){
          console.log('hello')
          var choices = $('<button>').html(choice[i]);
          console.log(choices[i]);
          $('.choice').append(choices)
        }
      }
        $(".choice").empty();
    });

  function correctanswer() { // function providing correct answer feedback message
    $(".question").html("<p>Giddyup! You are correct!</p>"); // Confirming you got the correct answer
    $(".info").html(questions[num].info); // image of correct answer
  };

  function wronganswer() { //
    numberWrong++; // for every wrong answer, make sure to talley a wrong answer to each competitor's score
    $(".question").html("<p>Wrong! <br> The correct answer was: " + questions[num].answer + "</p>"); // If you got the answer wrong, it will display the correct answer here
    $(".info").html("<p>"+questions[num].info+"</p>");
  };

  function timeout() {
    numTimeout++; // for every question that's unanswered, make sure to talley a non-answer to each competitor's score
    $(".question").html("<p>Time's up! <br> The correct answer was: " + questions[num].answer + "</p>");
    $(".info").html("<p>"+questions[num].info+"</p>");
  };



  function endgame() { // end of game function. The following gets displayed at the end of the game.
    currentPlayer.score = numberCorrect - numberWrong;
    $(".question").html("<h2> " + currentPlayer.marker + numberCorrect + " answers correct!</h2>"
       + "<h2> " + currentPlayer.marker + numberWrong + " wrong!</h2>" );
    $(".choice").empty();
    timer.empty();
    $(".info").empty();
    num = 0;
    numberCorrect = 0;
    numberWrong = 0;
    numTimeout = 0;
    if (currentPlayer = game.player2) {
      $('.startButton').show().text(currentPlayer.marker + ' , your turn').css('b');
    } else {
        alert('the game is over');
    }

  };

// Resets page, just need to add a class and event listener
// function resetPage() {
//      location.reload();
//  }

//   function resetPage() { //resets the app back to its original starting point
//     $(".reset").reload();
// }

// player turns



choice.each(function(s) {
  $(this).on('click', playTurn)
  console.log('WORK DAMNIT.')

})
  function playTurn() { // Function #1: signify a players turn
    $(this).text(currentPlayer.marker) // adds the current player's marker
    $(this).off('click', playTurn) // Listening for a click event (off)
   // checkWinner() // apply the Check Winner function to see whos winning the game
  }

  function switchTurns() { // Function #2: switch turns between player 1 and player 2
    if(currentPlayer == game.player1) {
      currentPlayer = game.player2
    } else {
      currentPlayer = game.player1
    }
  }



  // function checkWinner() { // check to see who the winner is
  //   if (game.player1.score >= game.player2.score || game.player2.score >= game.player1.score ) {
  //     $.alert({title: currentPlayer.marker, content: 'Is The Winner!'});
  //
  //     choice.each(function(s) {
  //       $(this).off('click', playTurn)
  //     })
  //   } else {
  //     switchTurns()
  //   }
  // }

// });



//
//   //////////////////////
//   //  QUIZ QUESTIONS  //
//   //////////////////////
//
//   questions: [
//      {
//        image: 'https://s-media-cache-ak0.pinimg.com/736x/9c/15/56/9c155660ff8014a32ac8bc8b2b344ec9.jpg',
//        question: "What are the names of Elaine's bizarro friends?",
//        answers: [
//          {value: "Herman, Sal, Matthew", correct: false},
//          {value: "Kevin, Gene, Feldman", correct: true},
//          {value: "Elmo, Sid, Robert", correct: false},
//          {value: "Michael, Alonzo, Martin", correct: false},
//        ]
//      },
//
//      {
//        image: 'https://brobible.files.wordpress.com/2014/07/cosmo-kramer-assman3.png?w=650',
//        question: "What is Kramer's first name?",
//        answers: [
//          {value: "Blake", correct: false},
//          {value: "Christopher", correct: false},
//          {value: "Cosmo", correct: true},
//          {value: "Michael, Alonzo, Martin", correct: false},
//        ]
//      },
//
//      {
//        image: 'http://kramersapartment.com/wp-content/uploads/jack-klompus-the-cadillac-seinfeld-1.jpg',
//        question: "What is the name of the Gated Community Jery and George's parents move to?",
//        answers: [
//          {value: "Flamingo Estates", correct: false},
//          {value: "Palm Condos", correct: false},
//          {value: "Pelican Way", correct: false},
//          {value: "Del Boca Vista", correct: true},
//        ]
//      },
//
//      {
//        image: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-02/27/17/enhanced/webdr03/enhanced-13804-1425076996-24.png?no-auto',
//        question: "What is the name of Jerry's nemesis on the show?",
//        answers: [
//          {value: "Newman", correct: true},
//          {value: "Helen", correct: false},
//          {value: "Einstein", correct: false},
//          {value: "Frank", correct: false},
//        ]
//      },
//
//      {
//        image: 'https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAANgAAAAJDJjYjViYzAwLTU4ODUtNGNiOC05ZTJmLTg4ZWVmY2M1NDM2YQ.jpg',
//        question: "What electronic gift did Jerry give to his parents?",
//        answers: [
//          {value: "Wizard Computer", correct: true},
//          {value: "Earrings", correct: false},
//          {value: "Sneakers", correct: false},
//          {value: "Food", correct: false},
//        ]
//      },
//
//      {
//        image: 'http://vignette1.wikia.nocookie.net/seinfeld/images/8/86/TheFrogger.jpg/revision/latest?cb=20110826182700',
//        question: "What video game did George have the high score on?",
//        answers: [
//          {value: "Tetris", correct: false},
//          {value: "Galaga", correct: false},
//          {value: "Pacman", correct: false},
//          {value: "Frogger", correct: true},
//        ]
//      },
//
// }
