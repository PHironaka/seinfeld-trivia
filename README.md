# Seinfeld Trivia!
![https://media.giphy.com/media/l41lIkTqv4NTHPktO/giphy.gif](https://media.giphy.com/media/l41lIkTqv4NTHPktO/giphy.gif)

## Link To Game

### [Seinfeld Trivia](https://phironaka.github.io/seinfeld-trivia/)

## Premise

Seinfeld Trivia! is a two player trivia game to test a user's knowledge of Seinfeld. 

## Requirements
- Needs to be two player
- Must be fun!

## User Story

### Full Launch List here:  
#### [Trello Board](https://trello.com/b/ReUkqopB/project1)

- Once the player loads the site, they have the option to play a two player game or one player game 
- For each given question: if you provide the correct answer, a 'ding' noise animates in the background
- For each correct answer, a 'giddyup!' message gets displayed signifying it was correct
- For each in correct answer, a red 'wrong' gets printed
- Once a user submits their answer, they will have the option to jump to the next question
- There is a an info icon in the upper right hand corner. If a user clicks this button, a modal pop up screen will appear displaying the rules of the game.
- Once player 1 completes the 5 questions, a score card will appear on the screen detailing how many questions they got correct
- Once player 1 finishes and receives his score, it will then prompt user 2 to begin his game

## Minimum Viable Product
- Players are able to test their Seinfeld knowledge in a fun, interactive way
- It logs each person's score
- Hosted on Github Pages
- Switches scores between each player
- Congratulations Screen to the player who wins, whether it's player 1 or player 2
- If there is a tie, there should be a response screen displayed with a message tied to the outcome.

## Technology
- HTML, CSS, Javascript & jQuery
- SCSS for CSS preprocessing
- For CSS styntax I used Block Element Modifier (BEM) Methodology for css naming conveniton. 

## CSS Classes and Ids

- ` game ` - All elements of the game sit within this variable
- `player1` - Player 1 
- `#nav` -modal navigation window. all the instructions on how to play the game.
- `.container` - container which wraps around the entire page. 
<<<<<<< HEAD
-  `.container-logo` -  Seinfeld logo
-   `.hamburger-icon` - nav icon in top right hand corner of page
-    `.welcome` -  Intro copy on the home screen
-     `.startButton` - Button on the home screen to start the game
 - `.quiz-content` - div that contains all elements of the game itself (questions, answers, choices)
-  `.score` - the container where the player's marker is at
-   `.score-player` - the h4 tag where the player marker sits
-  `.timer` - Countdown timer
- `.question` - the trivia question
- `.tie` - If there is a tie, a message  and image will appear inside here
-  `.winner` - the winner of the game will have a personalized congratulations message, whether it be player 1 or player 2
-  `.row` -      container where the correct answer's image appears
-   `.info` - parent element of correct answer's image
-    `.choice` - 4 choices for each question asked
=======
- `.container-logo` -  Seinfeld logo
- `.hamburger-icon` - nav icon in top right hand corner of page
- `.welcome` -  Intro copy on the home screen
- `.startButton` - Button on the home screen to start the game
- `.quiz-content` - div that contains all elements of the game itself (questions, answers, choices)
- `.score` - the container where the player's marker is at
- `.score-player` - the h4 tag where the player marker sits
- `.timer` - Countdown timer
- `.question` - the trivia question
- `.tie` - If there is a tie, a message  and image will appear inside here
- `.winner` - the winner of the game will have a personalized congratulations message, whether it be player 1 or player 2
- `.row` -      container where the correct answer's image appears
- `.info` - parent element of correct answer's image
- `.choice` - 4 choices for each question asked
>>>>>>> d1970322fe02a8903f25a7a693907db4d5fd0d53
