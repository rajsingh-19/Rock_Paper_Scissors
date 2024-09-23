let pcScore = document.querySelector("#pcScore");
let userScore = document.querySelector("#userScore");
let gameContentContainer = document.querySelector(".container");
let itemsContainer = document.querySelector(".icons-container");
let userImage = document.querySelector(".user-picked-container img");
let userButton = document.querySelector(".user-picked-container button");
let pcImage = document.querySelector(".pc-picked-container img");
let pcButton = document.querySelector(".pc-picked-container button");
let userCircleBorder1 = document.querySelector(".user-circle-border-1");
let userCircleBorder2 = document.querySelector(".user-circle-border-2");
let userCircleBorder3 = document.querySelector(".user-circle-border-3");
let pcCircleBorder1 = document.querySelector(".pc-circle-border-1");
let pcCircleBorder2 = document.querySelector(".pc-circle-border-2");
let pcCircleBorder3 = document.querySelector(".pc-circle-border-3");
let gameResultContainer = document.querySelector(".game-result-container");
let conclusionText = document.querySelector(".conclusion");
let againstPcContainer = document.querySelector(".againstPc-container");
let playReplayBtn = document.querySelector("#playReplayBtn");
let nextButton = document.querySelector("#nextButton");
let rulesBtn = document.querySelector(".rules-btn");

let rulesContainer = document.querySelector("#rulesContainer");

//  Function to show the rules container
let openRules = () => {
  rulesContainer.classList.remove("hide");
};
//  Function to close the rules container
let closeRules = () => {
  rulesContainer.classList.add("hide");
};
//  Function to goto the Home page
let goToHomePage = () => {
  window.location.href = "./index.html";
};
//  Function to goto the Celebrate page
let goToCelebratePage = () => {
  window.location.href = "./celebrate.html";
};

// Function to update scores and store them in local storage
let updateScores = (userScoreValue, pcScoreValue) => {
  // Update the score displayed on the page
  userScore.innerText = userScoreValue;
  pcScore.innerText = pcScoreValue;

  // Store scores in local storage
  localStorage.setItem("userScore", userScoreValue);
  localStorage.setItem("pcScore", pcScoreValue);
};

// Initialize scores from local storage when the page loads
let initializeScores = () => {
  let savedUserScore = localStorage.getItem("userScore") || 0;
  let savedPcScore = localStorage.getItem("pcScore") || 0;
  userScore.innerText = savedUserScore;
  pcScore.innerText = savedPcScore;
};

// Call this function when the page loads
initializeScores();

//  Function for play again and replay
let playAgain = () => {
  gameResultContainer.classList.add("hide");
  itemsContainer.classList.remove("hide");
  conclusionText.innerText = "";
  againstPcContainer.classList.remove("hide");
  playReplayBtn.innerText = "PLAY AGAIN";
  nextButton.classList.add("hide");
  gameContentContainer.classList.remove("flex");
  gameContentContainer.classList.remove("justify-center");
  rulesBtn.classList.remove("right-165");
  rulesBtn.classList.add("right-40");
};

//  Function to get a random choice for the PC
let getPcChoice = () => {
  let pcChoiceArray = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * pcChoiceArray.length);
  return pcChoiceArray[randomIndex];
};

// Function to handle user's choice and compare with PC's choice
let userChoice = (userChosen) => {
  // Hide the items container once the user makes a choice
  itemsContainer.classList.add("hide");
  // Shows the result container as appropriate
  gameResultContainer.classList.remove("hide");
  // Get the PC's random choice
  gameContentContainer.classList.add("flex");
  gameContentContainer.classList.add("justify-center");
  let pcChosen = getPcChoice();

  // Set the user-picked image
  userImage.src = `./assets/${userChosen}.png`; // Assuming image files are named rock.png, paper.png, scissors.png
  userImage.alt = userChosen; // Update alt text
  userImage.className = userChosen; // update class name
  userButton.className = `icons-btn btn-shadow ${userChosen}-btn`;

  // Set the PC-picked image
  pcImage.src = `./assets/${pcChosen}.png`;
  pcImage.alt = pcChosen; // Update alt text
  pcImage.className = pcChosen; // Update class name
  pcButton.className = `icons-btn btn-shadow ${pcChosen}-btn`;

  //  removes the classes for initial renders
  userCircleBorder1.classList.remove(
    "light-green-border",
    "flex",
    "dir-row",
    "justify-center",
    "align-center"
  );
  userCircleBorder2.classList.remove(
    "green-border",
    "flex",
    "dir-row",
    "justify-center",
    "align-center"
  );
  userCircleBorder3.classList.remove(
    "dark-green-border",
    "flex",
    "dir-row",
    "justify-center",
    "align-center"
  );
  pcCircleBorder1.classList.remove(
    "light-green-border",
    "flex",
    "dir-row",
    "justify-center",
    "align-center"
  );
  pcCircleBorder2.classList.remove(
    "green-border",
    "flex",
    "dir-row",
    "justify-center",
    "align-center"
  );
  pcCircleBorder3.classList.remove(
    "dark-green-border",
    "flex",
    "dir-row",
    "justify-center",
    "align-center"
  );

  // Get current scores
  let currentUserScore = parseInt(userScore.innerText);
  let currentPcScore = parseInt(pcScore.innerText);

  if (userChosen === pcChosen) {
    conclusionText.innerText = "TIE UP";
    againstPcContainer.classList.add("hide");
    playReplayBtn.innerText = "REPLAY";
    nextButton.classList.add("hide");
  } else if (
    (userChosen === "rock" && pcChosen === "scissors") ||
    (userChosen === "scissors" && pcChosen === "paper") ||
    (userChosen === "paper" && pcChosen === "rock")
  ) {
    conclusionText.innerText = "YOU WIN";
    // Increment user's score
    currentUserScore++;
    userCircleBorder1.classList.add(
      "light-green-border",
      "flex",
      "dir-row",
      "justify-center",
      "align-center"
    );
    userCircleBorder2.classList.add(
      "green-border",
      "flex",
      "dir-row",
      "justify-center",
      "align-center"
    );
    userCircleBorder3.classList.add(
      "dark-green-border",
      "flex",
      "dir-row",
      "justify-center",
      "align-center"
    );
    nextButton.classList.remove("hide");
    nextButton.classList.add("margin-left-20");
    rulesBtn.classList.remove("right-40");
    rulesBtn.classList.add("right-165");
  } else {
    conclusionText.innerText = "YOU LOST";
    // Increment PC's score
    currentPcScore++;
    pcCircleBorder1.classList.add(
      "light-green-border",
      "flex",
      "dir-row",
      "justify-center",
      "align-center"
    );
    pcCircleBorder2.classList.add(
      "green-border",
      "flex",
      "dir-row",
      "justify-center",
      "align-center"
    );
    pcCircleBorder3.classList.add(
      "dark-green-border",
      "flex",
      "dir-row",
      "justify-center",
      "align-center"
    );
    nextButton.classList.add("hide");
  }
  // Update scores in local storage
  updateScores(currentUserScore, currentPcScore);
};
