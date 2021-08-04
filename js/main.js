/**
 * Try to manipulate the page
 *
 * Easiest
 * 1) Get the title for each dog/cat services, and put them into the console using console.log
 * 2) Change the title of the page to "We're the CAT People"
 * 3) Change the main image to be something cat related.
 *
 *
 * Harder
 * 1) Replace the call to action button background color with "red"
 * 2) Find another image and replace the header (try unsplash.com, get familiar with searching for images)
 * 3) When someone clicks the "Book your next Rover sitter" button, change the text of the button to say "Thanks"
 *
 *
 * Hardest (only if you get the others first)
 * 1) Make the responsive menu work!
 * 2) Implement a modal window - "Sign up now" CTA when someone clicks the 'Sign Up' button
 */




 // ________________________________________________________________________________________________


  // * 1) Get the title for each dog/cat services, and put them into the console using console.log

  function myFunction() {
    var services = document.querySelectorAll(".service");
    var i;
    for (i = 0; i < services.length; i++) {
     console.log(services[i].innerHTML);
    }
  }
 myFunction();

 // ________________________________________________________________________________________________

document.querySelector('.cat').onclick = catTheme;

document.querySelector('.dog').onclick= dogTheme;
// var style = document.querySelector('style');


function catTheme() {
  document.querySelector('.rover-hero-container-div h1').innerHTML = "We're the Cat People";
  document.querySelector('.rover-action-img').style.backgroundImage = "url(https://i.ibb.co/B6TghV3/anton-jauregui-W2-Q-B8ev-UU-unsplash.jpg)";
  document.querySelector('.rover-action-img').style.backgroundPosition = "0 -800px";
  document.querySelector('.rover-hero-container').style.backgroundImage = "url(https://i.ibb.co/xHT876p/alu-zheng-Idoj-Jw-FIHt-U-unsplash.jpg)";
  document.querySelector('.rover-hero-container').style.backgroundPosition = "left";
  document.querySelector('.rover-hero-container').style.backgroundSize = "130%";
  document.querySelector('.rover-123-container h2').innerHTML = "We’re the treat-your-cat-like-family cat people";


  //   function position(x) {
  //   if (x.matches) {
  //     document.querySelector('.rover-action-img').style.backgroundPositionX = "65%";
  //     document.querySelector('.rover-action-img').style.backgroundPositionY = "80%";
  //     document.querySelector('.rover-action-img').style.backgroundSize = "250%";
  //
  //   } else {
  //     document.querySelector('.rover-action-img').style.backgroundPosition = "0 -800px";
  //   }
  // }
  //
  // var x = window.matchMedia("(max-width: 770px)");
  // position(x);
  // x.addListener(position);


}

function dogTheme() {
  document.querySelector('.rover-hero-container').style.backgroundImage = "url(https://i.ibb.co/FYyT7Tg/hero.jpg)";
  document.querySelector('.rover-hero-container').style.backgroundPosition = "center 15%";
  document.querySelector('.rover-hero-container').style.backgroundSize = "cover";
  document.querySelector('.rover-123-container h2').innerHTML = "We’re the treat-your-dog-like-family dog people";
  document.querySelector('.rover-hero-container-div h1').innerHTML = "We're the Dog People";
  document.querySelector('.rover-action-img').style.backgroundImage = "url(https://www.rover.com/static/dist/a16f802b037458af3bbab4db5bd3f93e.jpg)";

  function position(x) {
  if (x.matches) {
    document.querySelector('.rover-action-img').style.backgroundPositionX = "65%";
    document.querySelector('.rover-action-img').style.backgroundPositionY = "80%";
    document.querySelector('.rover-action-img').style.backgroundSize = "250%";

  } else {
    document.querySelector('.rover-action-img').style.backgroundPosition = "center";
    document.querySelector('.rover-action-img').style.backgroundSize = "cover";
  }
}

var x = window.matchMedia("(max-width: 770px)");
position(x);
x.addListener(position);

}

// ________________________________________________________________________________________________

// * 1) Replace the call to action button background color with "red"


function changeColor() {
  var button = document.querySelectorAll(".rover-cta");
  var i;
  for (i = 0; i < button.length; i++) {
  button[i].style.background = "linear-gradient(180deg,#178c5f, #207e4f)";}
}
changeColor();


// ________________________________________________________________________________________________

// * 3) When someone clicks the "Book your next Rover sitter" button, change the text of the button to say "Thanks"

document.querySelector('.rover-facts div').onclick = function(e) {
  e.target.innerHTML = "Thank You ♡"};

// ________________________________________________________________________________________________

// * 1) Make the responsive menu work!

function myMenu() {
  var menuState = document.querySelector(".mobile-nav");
  if (menuState.style.height === "230px" ) {
    menuState.style.height = "0";
    menuState.style.border = "white";

  } else {
    menuState.style.height = "230px";
    menuState.style.borderTop = " 1px solid #cfd7de";
    menuState.style.borderBottom = " 1px solid #cfd7de";

  }
}


// ________________________________________________________________________________________________

// * 2) Implement a modal window - "Sign up now" CTA when someone clicks the 'Sign Up' button




document.querySelector('.rover-header-right a').onclick = function(e) {
document.querySelector('.mask').style.display = "block"
document.querySelector('.mask-content').style.display = "block"
document.querySelector('body').style.overflow = "hidden"
};


document.querySelector('.mask').onclick = function(e) {
document.querySelector('.mask').style.display = "none"
document.querySelector('body').style.overflow = "scroll"
 };





 // ________________________________________________________________________________________________

// Little Doggy Game
// welcome page

document.querySelector('.welcoming-model-start').addEventListener("click", start);

document.addEventListener("keypress", function(event) {
  whichKey(event.key);
});

function whichKey(key) {

  switch (key) {
    case " ":
      jump();
      break;
    }
  }

// Game Stopwatch

var stopwatch = document.querySelector('.stopwatch');
var ms = 0, s = 0, m = 0;
var timer;
var records = [];
var recordsNum = [];


function startTimer() {
  if(!timer) {
    timer = setInterval(run, 10);
  }
}

function run() {
  stopwatch.textContent = getTimer();
  ms++;
  if(ms == 100) {
    ms = 0;
    s++;
    if(s == 60) {
      s = 0;
      m++;
    }
  }
}

function pause() {
  stopTimer();
}

function stop() {
  stopTimer();
  ms = 0;
  s = 0;
  m = 0;
  stopwatch.textContent = getTimer();
}

function stopTimer() {
  clearInterval(timer);
  timer = false;

}

function getTimer() {
  return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + ":" + (ms < 10 ? "0" + ms : ms);
}

function restart() {
  stop();
  startTimer();
}

// Get the player's record

   function lap() {
        recordsNum.push(parseInt((m < 10 ? "0" + m : m) + (s < 10 ? "0" + s : s) +  (ms < 10 ? "0" + ms : ms)));
        recordsBreaking(recordsNum);
     }

      function recordsBreaking(arr){
        records.push(getTimer());
        var last_element = records[records.length - 1];
        console.log( "your last " + last_element);
        console.log(records);
        var maxTime = records[0];

        let max = arr[0];
        for(let i = 1; i < arr.length; i++){
          if(arr[i] > max){
            max = arr[i];
            maxTime = records[i];
          }
        }
        console.log("your max " + maxTime);

        if (maxTime == last_element){
          document.querySelector('.model-h3').innerHTML = "You hit the record!";
          document.querySelector('.para').innerHTML = "Your new record " + maxTime;
        }
        else {
          document.querySelector('.model-h3').innerHTML = "You Lost!";
          document.querySelector('.para').innerHTML = "Your time " + last_element + ". Your record " + maxTime;
        }
      }


// 123, start!

function start() {
  document.querySelector('.welcoming').style.display = "none";
  document.querySelector('.model-123').style.display = "block";
  stopwatch.style.display = "block";;


  setTimeout(function(){
    document.querySelector('#one').style.display = "block";

  setTimeout(function(){
    document.querySelector('#one').style.display = "none";
    document.querySelector('#two').style.display = "block";

    setTimeout(function(){
      document.querySelector('#two').style.display = "none";
      document.querySelector('#three').style.display = "block";

      setTimeout(function(){
  document.querySelector('#three').style.display = "none";
        document.querySelector('.model-123').style.display = "none";

// playing

        setTimeout(function(){
          theObject.style.animation = "object-moves linear 1s infinite";
          startTimer();
        },600)

      },500)

    },500)

  },500)

},500)
}

var myCharacter = document.querySelector('.character');
var theObject = document.querySelector('.object');

document.querySelector('.play-ground').onclick = jump;

  function jump() {
  myCharacter.classList.add("animation");
  setTimeout(function(){
    myCharacter.classList.remove("animation");
  },500)
  };


// You lost!

var losing = setInterval(function(){

var characterTop = parseInt(window.getComputedStyle(myCharacter).getPropertyValue("top"));
var objectLeft = parseInt(window.getComputedStyle(theObject).getPropertyValue("left"));


if (objectLeft < 80 && objectLeft > 0 && characterTop >= 170){
document.querySelector('.mask-lost').style.display = "block";
theObject.style.animation = "none";
stopwatch.style.display = "none";;
pause();
lap();
}

},10);




// do you want to play again?

// -no

document.querySelector('.exis-lost').onclick = noRePlay;

function noRePlay(){
  stop();
  document.querySelector('.mask-lost').style.display = "none";
  document.querySelector('.welcoming').style.display = "block";

}

// -Yes

document.querySelector('.model-replay').onclick = rePlay;

function rePlay() {
  document.querySelector('.mask-lost').style.display = "none";
  stopwatch.style.display = "block";;


  setTimeout(function(){
    theObject.style.animation = "object-moves linear 1s infinite";
    restart();
  },600)
}
