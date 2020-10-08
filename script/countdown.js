// This files handles evertything related to countdown on smartwatch

// setInterval id
var id = null;

//global timer variables
let hrs = 0;
let minutes = 0;
let seconds = 0;

let timestampCount = 0;

function countdownTimer() {
  // when user clicks on timer button it will either show the timer diplay on screen if
  //  it was off or it will show the
  // home screen if timer was already on in display by checking the color of the timer icon
  // rgb(57, 62, 70) -> timer app was off turn it on
  //   rgb(255, 255, 255)-> timer is on turn close the app

  let $icon = document.querySelector(".fa-clock-o");
  if (window.getComputedStyle($icon).color === "rgb(57, 62, 70)") {
    document.querySelector(".date-time").style.display = "none";
    document.querySelector(".messages").style.display = "none";
    document.querySelector(".full-message").style.display = "none";
    document.querySelector(".music-player").style.display = "none";
    document.querySelector(".fa-music").style.color = "#393e46";
    document.querySelector(".fa-comments").style.color = "#393e46";
    $icon.style.color = "white";
  } else if (window.getComputedStyle($icon).color === "rgb(255, 255, 255)") {
    document.querySelector(".date-time").style.display = "block";
    document.querySelector(".messages").style.display = "flex";
    document.querySelector(".full-message").style.display = "none";
    document.querySelector(".music-player").style.display = "block";
    document.querySelector(".fa-music").style.color = "#393e46";
    document.querySelector(".fa-comments").style.color = "#393e46";
    $icon.style.color = "#393e46";
  }
}

function startPauseTimer() {
  /*
  This function takes care of start and pause timer 
  
  */
  let $playPause = document.querySelector(".play-timer");
  let $timer = document.querySelector(".timer");

  // if the timer icon was previouly play then how pause else vice versa
  $playPause.classList =
    $playPause.classList[1] === "fa-play"
      ? "fa fa-pause play-timer"
      : "fa fa-play play-timer";

  // if play option is clicked if block is executed or if pause button is clicked else block is executed
  if ($playPause.classList[1] === "fa-pause") {
    id = setInterval(() => {
      seconds += 1;
      if (seconds == 61) {
        seconds = 0;
        minutes += 1;
      }
      if (minutes == 61) {
        seconds = 0;
        minutes = 0;
        hrs += 1;
      }

      $timer.innerHTML = `${hrs < 10 ? `0${hrs}` : hrs}:${
        minutes < 10 ? `0${minutes}` : minutes
      }:${seconds < 10 ? `0${seconds}` : seconds}`;
    }, 1000);
  } else if ($playPause.classList[1] === "fa-play") {
    clearInterval(id);
  }
}

function getTimeStamp() {
  /**
   * When user clicks on flag icon the timestamp is noted and diplay below the main timer
   */
  let $timestampContainer = document.querySelector(".timestamp-container");
  //     <div class="container">
  //     <p>1</p>
  //     <p class="timestamp">00:00:00</p>
  //   </div>
  // below code will create tags as per above comment

  let $container = document.createElement("div");
  $container.classList = "container";

  let $number = document.createElement("p");
  $number.appendChild(document.createTextNode(++timestampCount));
  $container.appendChild($number);

  let $timestamp = document.createElement("p");
  $timestamp.classList = "timestamp";
  $timestamp.appendChild(
    document.createTextNode(document.querySelector(".timer").innerHTML)
  );
  $container.appendChild($timestamp);
  $timestampContainer.appendChild($container);
}

function stop() {
  /**
   * if user clicks on sqaaure icon the timestamp list is cleared and timer is set to zero
   */
  clearInterval(id);
  document.querySelector(".timer").innerHTML = "00:00:00";
  document.querySelector(".play-timer").classList = "fa fa-play play-timer";
  document.querySelector(".timestamp-container").innerHTML = "";
}

export { countdownTimer, startPauseTimer, getTimeStamp, stop };
