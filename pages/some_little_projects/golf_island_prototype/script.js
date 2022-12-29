function hideSwing() {
  document.getElementById("swing").style.display = 'none';
}

function unhideSwing() {
  document.getElementById("swing").style.display = 'block';
}

function hideStart() {
  document.getElementById("start").style.display = 'none';
}

function unhideStart() {
  document.getElementById("start").style.display = 'block';
}

function hideBeforeStartText() {
  document.getElementById("before-start-text").style.display = 'none';
}

function unhideBeforeStartText() {
  document.getElementById("before-start-text").style.display = 'block';
}

hideSwing();
unhideBeforeStartText();
let img = document.createElement("img");
let holeDistance = 1120;
let shotCounter = 0;

function start() {
  hideBeforeStartText();
  let introText = "It's a beautiful sunny day on Golf Island. The cobalt waters break upon the coastline. There is no wind. You've done a 20-hole course on the green. There's only one match to go. Par is 6. If you get a Birdie (par minus 1), you'll win the cup! You stand at the tee and get ready to strike. <br> <br> The hole is 1120 feet away. You wind up your club. <br> <br>"

  document.getElementById("textarea").innerHTML += introText;
  unhideSwing();
  hideStart();

  img.src = "golfpainting.png";
  img.alt = "Image load error";
  document.getElementById('rightsidebar').appendChild(img);

}

var objDiv = document.getElementById("textarea");
let arr = [holeDistance, shotCounter];
let adjective = "";


function swing() {
  holeDistance = arr[0];
  shotCounter = arr[1];

  swingValue = Math.floor(Math.random() * 500);
  holeDistance = holeDistance - swingValue;

  shotCounter++;

  if (holeDistance <= 0) {
    document.getElementById("textarea").innerHTML += `You shot it right in from there! Wow! <br> <br>`;
    end(shotCounter);
  }

  if (50 >= swingValue) {
    swingAdjective = "petty";
  } else if (150 >= swingValue && swingValue > 50) {
    swingAdjective = "stunning";
  } else if (225 >= swingValue && swingValue > 150) {
    swingAdjective = "fantastic";
  } else {
    swingAdjective = "spectacular";
  }

  if (40 >= holeDistance) {
    distanceAdjective = "meager";
  } else if (250 >= holeDistance && holeDistance > 40) {
    distanceAdjective = "modest";
  } else if (600 >= holeDistance && holeDistance > 250) {
    distanceAdjective = "substantial";
  } else if (900 >= holeDistance && holeDistance > 600) {
    distanceAdjective = "considerable";
  } else {
    distanceAdjective = "cool";
  }

  if (holeDistance > 0) {
    document.getElementById("textarea").innerHTML += `You hit a ${swingAdjective} ${swingValue} feet! You have a ${distanceAdjective}  ${holeDistance} feet remaining! <br><br>`;
  }

  objDiv.scrollTop = objDiv.scrollHeight;

  arr.splice(0, 1, holeDistance);
  arr.splice(1, 1, shotCounter);

  return arr;
}

const scoreNames = ["Hole-in-one!", "Albatross.", "Eagle.", "Birdie.", "Par.", "Bogey.", "Double Bogey...", "Triple Bogey...", "Worse than Triple Bogey... Basically, really bad!"]
let coursePar = 5;

function golfScore(shots, par) {
  if (shots == 1) {
    return scoreNames[0];
  } else if (shots === par - 3) {
    return scoreNames[1];
  } else if (shots === par - 2) {
    return scoreNames[2];
  } else if (shots === par - 1) {
    return scoreNames[3];
  } else if (shots === par) {
    return scoreNames[4];
  } else if (shots === par + 1) {
    return scoreNames[5];
  } else if (shots === par + 2) {
    return scoreNames[6];
  } else if (shots === par + 3) {
    return scoreNames[7];
  } else {
    return scoreNames[8];
  }
}

let tournamentStanding = "";

function end(shots) {
  hideSwing();
  let fancyScoreWord = golfScore(shots, coursePar);

  switch (true) {
    case fancyScoreWord == scoreNames[0] || fancyScoreWord == scoreNames[1] || fancyScoreWord == scoreNames[2]:
      tournamentStanding += "<strong>You came in 1st! Congratulations!! You win the game! You are Golf Chad! Your name goes down in history! The guy in bronze looks at you contemptuously, for he is not Golf Chad.</strong>";
      break;
    case fancyScoreWord == scoreNames[3] || fancyScoreWord == scoreNames[4]:
      tournamentStanding += "<strong>You came in 2nd! So close! You'll be remembered, but not as much as the other guy.</strong>";
      break;
    case fancyScoreWord == scoreNames[5] || fancyScoreWord == scoreNames[6]:
      tournamentStanding += "<strong>You came in 3rd. You feel as if you should have won. The event guy sneers at you as he hands you your trophy. But hey, at least you're on the podium, right?</strong>";
      break;
    default:
      tournamentStanding += "<strong>You lose! You had a chance at the gold medal, at the prestigious Golf Island Cup, but you blew it. You so blew it. The crowd laughs, and you're handed a $5 gift card. Golf Chad, on the other hand, is paid ten million dollars.</strong>";
  }

  document.getElementById("textarea").innerHTML += `Ball in hole! Your score is: ${fancyScoreWord} ${tournamentStanding}`;


  if (fancyScoreWord == scoreNames[0] || fancyScoreWord == scoreNames[1] || fancyScoreWord == scoreNames[2]) {
    img.src = "goldtrophy-transparent.png";
    document.getElementById("bottom-bar").innerHTML += `1st`;
  } else if (fancyScoreWord == scoreNames[3] || fancyScoreWord == scoreNames[4]) {
    img.src = "silvertrophy-transparent.png";
    document.getElementById("bottom-bar").innerHTML += `2nd`;
  } else if (fancyScoreWord == scoreNames[5] || fancyScoreWord == scoreNames[6]) {
    img.src = "bronzetrophy-transparent.png";
    document.getElementById("bottom-bar").innerHTML += `3rd`;
  } else {
    img.src = "poop.png";
    document.getElementById("bottom-bar").innerHTML += `You Lost!`;
  }
}