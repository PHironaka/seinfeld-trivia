
$(document).ready(function() {
  $('.score').hide();
  $('.quiz-content').hide();
   $(".welcome").html("<h1> Are you master of your domain? King of the castle? Lord...of the Manor? Prove it!</h1>");
   $("#reset").hide();
});

/////////////////////////////////
//       Global Variables     //
//////////////////////////////

 var theBody = $('body'); // body
 var theContainer = $('.container'); // container class
 var scoreCorrect = $('.score-player'); // correct score class
 var scoreIncorrect = $('.score-incorrect'); // incorrect score class
 var icon = document.getElementById("icon"); // gets #icon div iD element
 var icon1 = document.getElementById("a"); // gets #a div iD element
 var icon2 = document.getElementById("b"); // gets #b div iD element
 var icon3 = document.getElementById("c"); // gets #c div iD element
 var nav = document.getElementById('nav'); // gets #nav div iD element
 var game = {  // variable to store player info
     player1: {marker: " 👩🏻 ", score: 0, turn: true },
     player2: {marker: " 👨🏻 ", score: 0, turn: false }
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

   info: "<img class= 'img-responsive' width=400 src='https://s-media-cache-ak0.pinimg.com/564x/6b/e1/f9/6be1f97bbb3e8bd7b22cfd23bcb880fe.jpg'>"
 };

 var seinfeldTwo = {
   question: 'What is the name of the Gated Community Jery and Georges parents move to?',
   choice1: 'Palm Condos',
   choice2: 'Pelican Way',
   choice3: 'Del Boca Vista',
   choice4: 'Panama Canals',
   answer: 'Del Boca Vista',
   info: "<img class= 'img-responsive' width=400 src='https://i.ytimg.com/vi/Zc9-rYBOS5w/hqdefault.jpg'>"
 };


 var seinfeldThree = {
   question: 'What are the names of Elaines bizarro friends?',
   choice1: 'Herman, Sal, Matthew',
   choice2: 'Kevin, Gene, Feldman',
   choice3: 'Elmo, Sid, Robert',
   choice4: 'Michael, Alonzo, Martin',
   answer: 'Kevin, Gene, Feldman',
   info: "<img class= 'img-responsive' width=400 src='http://i.onionstatic.com/avclub/3865/40/16x9/960.jpg'>"
 };

 var seinfeldFour = {
   question: "What is the Soup Nazi's favorite expression?",
   choice1: 'Oh heeeellll no!',
   choice2: 'No Soup for you!',
   choice3: 'Get the heck outta heeere',
   choice4: 'Talk to the hand!',
   answer: 'No Soup for you!',
   info: "<img  class= 'img-responsive' width=400 src='http://cdn.playbuzz.com/cdn/0a9b3361-3273-4f39-9047-d96fa5f15d7b/241464ed-f2e0-4c21-9c26-2fbb8d337923.jpg'>"
 };

 var seinfeldFive = {
   question: "What is the name of the fragrance Calvin Klein stole from Kramer?",
   choice1: 'The Beach',
   choice2: 'Fantasy',
   choice3: 'The K-Man',
   choice4: 'Light',
   answer: 'The Beach',
   info: "<img  class= 'img-responsive' width=400 src='https://s-media-cache-ak0.pinimg.com/736x/f1/dd/57/f1dd571ca1b9e60d5c70e736a0182497.jpg'>"
 };

 var seinfeldSix = {
   question: "What is Jerry's apartment number?",
   choice1: '5E',
   choice2: '6B',
   choice3: '5A',
   choice4: '3C',
   answer: '5A',
   info: "<img  class= 'img-responsive' width=400 src='http://cdn.playbuzz.com/cdn/0a9b3361-3273-4f39-9047-d96fa5f15d7b/39a58813-30e9-4094-84d0-7ba9a82f10e8.jpg'>"
 };

 var seinfeldSeven = {
   question: "What is the name of the holiday Frank Costanza (George's father) created?",
   choice1: 'National Yelling Day',
   choice2: 'Festivus',

   choice3: 'Frankpalooza',
   choice4: 'The Pole',
   answer: 'Festivus',
   info: "<img  class= 'img-responsive' width=400 src='http://festivusweb.com/images/seinfeld-festivusjpg.jpg'>"
 };

 var seinfeldEight = {
   question: "What is Elaine's fathers name?",
   choice1: 'Christopher',
   choice2: 'Miles',
   choice3: 'Alton',
   choice4: 'George',
   answer: 'Alton',
   info: "<img  class= 'img-responsive' width=400 src='http://img2.rnkr-static.com/user_node_img/50040/1000786714/870/elaine-and-39-s-dad-terrorized-actors-on-set-photo-u2.jpg'>"
 };

 var seinfeldNine = {
   question: "What is Elaine's fathers name?",
   choice1: 'Christopher',
   choice2: 'Miles',
   choice3: 'Alton',
   choice4: 'George',
   answer: 'Alton',
   info: "<img  class= 'img-responsive' width=400 src='http://img2.rnkr-static.com/user_node_img/50040/1000786714/870/elaine-and-39-s-dad-terrorized-actors-on-set-photo-u2.jpg'>"
 };

 var triviaQuestion = [seinfeldOne,seinfeldTwo,seinfeldThree, seinfeldFour, seinfeldFive, seinfeldSix, seinfeldSeven, seinfeldEight]; // variables of each trivia question
 var questions = []; // empty array for questions
 var num =0; // number that gets counted down towards
 var time =10; // starting point number
 var numberCorrect = 0; // starting point of number of correct answers
 var numberWrong = 0; //
 var numTimeout = 0; // Time out for each question
 var timer = $('.timer'); // variable for the time remaining countdown timer


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



  $(".startButton").click(function(){ // click event listener to begin the quiz
    console.log(currentPlayer);
    questions = triviaQuestion;

  $('.score').show();
  $(".welcome").hide();
  $('.quiz-content').show();
  $("#reset").hide();

  scoreCorrect.text(game.player1.marker); // text to signify the correct score

  if (currentPlayer.marker == game.player2.marker) {
    console.log ('changing the scoreboard')
    $('.score').html('<h4 class="score-player">' + currentPlayer.marker + '</h4>');
  }

    nextquestion();
     $(".startButton").hide(); // hide the start button once the game begins

  })


  function nextquestion() { // Function #3: Set the time of each question being asked
    time = 10; // Five Seconds of time per question
    counter = setInterval(increment, 1000); // The counter for each interval is on a one per second interval
    $(".timer").html("<h2>Time Remaining: " + time + "</h2>"); // Create an H2 signifying the amount of time remaining on the question
    $(".question").html("<h3>" + questions[num].question + "</h3>"); // here is the question
    $(".ans1").html("<a>" + questions[num].choice1 + "</a>"); // here is the first possible answer
    $(".ans2").html("<a>" + questions[num].choice2 + "</a>"); // here is the second possible answer
    $(".ans3").html("<a>" + questions[num].choice3 + "</a>"); // here is the third possible answer
    $(".ans4").html("<a>" + questions[num].choice4 + "</a>"); // here is the fourth possible answer
    $(".info").empty(); // strips child node from the info property
    $(".startButton").hide();
    $(".choice").show();
    $("#reset").hide();
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
      setTimeout(endgame,2500);
    }
    else {
      setTimeout(nextquestion,2500);
    };
  };

  $(".choice").click(function() {
// Click Event listener to see which answer the user clicks
      if($(this).text() == questions[num].answer) { //if the answer chosen lines up with the question's correct answer

        numberCorrect++; // add it to the talley of correct scores answered
        correctanswer(); // correct answer function applied
        stop(); //stops method on matched elements
        $("#reset").hide();
      }

      else { // otherwise, use the same click event listener if the answer provided is wrong
        wronganswer(console.log("answer is wrong.")); // console log test to see if it's wrong
        stop();
      };

      function renderButton() { //renders the buttons for each question
        var choices = [];
        console.log('ready!');

        $('.choice').empty();

        for (i = 0;i<choices.length; i++){
          console.log('hello')
          // var choices = $('<button>').html(choice[i]);
          console.log(choices[i]);
          $('.choice').append(choices)

        }
      }

$(".choice").hide();
$("#reset").hide();

    });

  function correctanswer() { // function providing correct answer feedback message
    $(".question").html("<p>Giddyup! You are correct!</p>"); // Confirming you got the correct answer

     $(".info").fadeIn(2000);
    $(".info").html(questions[num].info); // image of correct answer
    $("#reset").hide();

  };

  function wronganswer() { //
    numberWrong++; // for every wrong answer, make sure to talley a wrong answer to each competitor's score
    $(".question").html("<p>Wrong! The correct answer was: " + questions[num].answer + "</p>"); // If you got the answer wrong, it will display the correct answer here
    $("#reset").hide();

  };

  function timeout() {
    numberWrong++; // for every question that's unanswered, make sure to talley a non-answer to each competitor's score
    $(".question").html("<p>Time's up! <br> The correct answer was: " + questions[num].answer + "</p>");
    $(".info").html("<p>"+questions[num].info+"</p>");
    $(".choice").hide();
    $("#reset").hide();

  };

  // Work in progress function - testing for after player 1 plays, switch turns to player two button
  //function nextTurn() {
  //   $('.next-button').html('<button style="width: 8em;"> ' + currentPlayer.marker + ', your turn</button>');
  //   $('.next-button').appendTo($('body'));
  //
  // }

  function endgame() { // end of game function. The following gets displayed at the end of the game.
    currentPlayer.score = numberCorrect - numberWrong;
    $(".question").html("<h2> " + currentPlayer.marker + numberCorrect + " answers correct!</h2>"
       + "<h2> " + currentPlayer.marker + numberWrong + " wrong!</h2>" );
       $(".choice").hide();

    $(".score").empty();
    timer.empty();
    $(".info").empty();

    num = 0;
    numberCorrect = 0;
    numberWrong = 0;
    numTimeout = 0;
    if (currentPlayer == game.player1) {
      $('.startButton').show().text(game.player2.marker + ' , your turn').css( "width", "8em" );
      currentPlayer = game.player2
    } else {
      if (game.player1.score > game.player2.score) {
        alert(game.player1.marker + 'wins YAAAAS!');
        $(".winner").html('<p>' + game.player1.marker+ 'has won! </p> <img src="https://media.tenor.co/images/8dfff07cf12e6e152acfb1cc8827486f/tenor.gif" alt="pez">')

      } else if (game.player1.score == game.player2.score) {

        $(".tie").html('<p> We have a tie! We are all winners! </p> <img src="http://vignette3.wikia.nocookie.net/seinfeld/images/f/fd/The_race.jpeg/revision/latest?cb=20120908035008" alt="the-race"> '); // image of correct answer

      }

      else {
        alert(game.player2.marker + 'wins!');
        $(".winner").html('<p>' + game.player2.marker+ 'has won! </p> <img src="https://media.giphy.com/media/KPdzGp8a20QbC/giphy.gif" alt="pez">')
      }
$("#reset").show();
    }


    // $(".restart").click(function() {
    //
    // });



  };

  // $('#reset').click(function() {
  //   //quiz-content,
  //   $('.winner, .tie, .score-player, .timer, .question, .choice').empty();
  //   $('.welcome, .startButton').fadeIn()
  //
  //   if ($(".startButton").show()) {
  //     $('.winner, .tie, .score-player, .timer, .question, .choice').show();
  //   }
  //   // location.reload();
  // });

  $('#reset').click(function() {
    //quiz-content,
    location.reload();
});

  //   $('.winner, .tie, .score-player, .timer, .question, .choice').hide();
  //   $('.welcome, .startButton').fadeIn();
  //   if ($(".startButton").show()) {
  //     $('#reset').hide();
  //     // $('.winner, .tie, .score-player, .timer, .question, .choice').show();
  //     $('.startButton').show().text('Start');
  //     $('.startButton').click(function()  {
  //         $('.score-player, .timer, .question, .choice').show();
  //       // if ( currentPlayer == game.player2) {
  //       //   currentPlayer = game.player1
  //       // } else {
  //       //   currentPlayer = game.player2
  //       // }
  //
  //     });
  //
  //   }
  // });


//Reloads the page as opposed to reset it
  $('#reset').click(function() {
    //quiz-content,
    location.reload();
});

// player turns
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
