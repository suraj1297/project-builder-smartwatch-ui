// stores the music name which is playing
var currentMusic = ".music-Memories";

var currentMusicNumber = 1;

var numberArray = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
];

var id = null;

function musicPlayer() {
  /**
   * when user clicks on music icon it will either show the music app
   * or will clos it depending upon the state last state of app
   *
   * rgb(57, 62, 70) -> music app was off turn it on
   *rgb(255, 255, 255)-> music is on turn close the app
   */

  let $icon = document.querySelector(".fa-music");
  if (window.getComputedStyle($icon).color === "rgb(57, 62, 70)") {
    document.querySelector(".date-time").style.display = "none";
    document.querySelector(".messages").style.display = "none";
    document.querySelector(".full-message").style.display = "none";
    document.querySelector(".music-player").style.display = "block";
    document.querySelector(".fa-comments").style.color = "#393e46";
    document.querySelector(".fa-clock-o").style.color = "#393e46";
    $icon.style.color = "white";
  } else if (window.getComputedStyle($icon).color === "rgb(255, 255, 255)") {
    document.querySelector(".date-time").style.display = "block";
    document.querySelector(".messages").style.display = "flex";
    document.querySelector(".fa-comments").style.color = "#393e46";
    document.querySelector(".fa-clock-o").style.color = "#393e46";
    $icon.style.color = "#393e46";
    document.querySelector(".controller").classList = "fa fa-play controller";
    let $music = document.querySelector(currentMusic);
    if ($music) $music.load();
  }
}

function changeMusic(e) {
  /**
   * When user clicks on an specific music from list it will played and last music will be removed from play state
   */

  //getting the element clicked by uer so that the music name can be known
  const $element = e.srcElement;
  let name = $element.innerText;
  let artist = $element.classList[1];

  // getting name and artist of clicked son
  document.querySelector(".titleName").innerHTML = name;
  document.querySelector(".artist").innerHTML = artist.split("-").join(" ");

  // getting the music which is in the top banner to remove its state
  let $music = document.querySelector(currentMusic);
  if ($music) $music.load();

  // saving the name of music cliked by user in current state
  currentMusic = `.music-${name.split(" ").join("-")}`;

  // getting the current music number in list
  currentMusicNumber = numberArray.indexOf($element.classList[2]);
  document.querySelector(".controller").classList = "fa fa-play controller";

  // displaying music banner in top player
  document.querySelector(
    ".play-pause"
  ).style.backgroundImage = `url("images/${name.split(" ").join("-")}.jpg")`;
  playPause();
}

function playPause() {
  /**
   * This function either plays he music or pauses it depending upon its last state
   */
  let $icon = document.querySelector(".controller");

  let $music = document.querySelector(currentMusic);
  if ($icon.classList[1] == "fa-pause") $music.pause();
  else {
    $music.play();
    track($music);
  }

  $icon.classList =
    $icon.classList[1] == "fa-pause"
      ? "fa fa-play controller"
      : "fa fa-pause controller";
}

function forwardBackward(direction) {
  /**
   * Function either plays next music or previous music depending upon its state
   */
  if (direction === "forward") {
    currentMusicNumber += 1;
  } else {
    currentMusicNumber -= 1;
  }

  // as the music list has only seven songs if the user tries to click next while the last is already in
  // play state then he will not be allowed to move ahed and same if the first music in list is in play state and wanna
  // play previous music he wont be allowed to do so
  if (currentMusicNumber > 7) currentMusicNumber = 7;
  else if (currentMusicNumber < 1) currentMusicNumber = 1;

  changeMusic({
    srcElement: document.querySelector(`.${numberArray[currentMusicNumber]}`),
  });
}

function track(music) {
  /**
   * Function calculates the percent of song played and shows that pogress in progress bar
   */
  let totalTime = music.duration;
  let $progress = document.querySelector(".progress");
  $progress.value = 0;
  let lastTime = 0;

  setInterval(() => {
    console.log("progress", $progress.getAttribute("value"));

    let progressValue = parseInt($progress.value);
    let currTime = progressValue;
    if (Math.abs(lastTime - currTime) > 3) {
      console.log("progress", progressValue);
      music.currentTime = progressValue;
    }
    lastTime = progressValue;

    $progress.setAttribute(
      "value",
      `${Math.ceil((music.currentTime * 100) / totalTime)}`
    );
    // $progress.value = `${(music.currentTime*100)/totalTime}`

    if (
      (music.currentTime * 100) / totalTime == 100 &&
      currentMusicNumber !== 7
    )
      forwardBackward("forward");
  }, 1000);
}

export { changeMusic, playPause, forwardBackward, musicPlayer };
