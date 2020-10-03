// This files handles evertything related to countdown on smartwatch


// setInterval id
var id = null;

//global timer variables
let hrs = 0;
let minutes = 0;
let seconds = 0;

let timestampCount = 0

function countdownTimer() {
    let $icon = document.querySelector(".fa-clock-o")
    if (window.getComputedStyle($icon).color === "rgb(57, 62, 70)") {

        document.querySelector(".date-time").style.display = "none"
        document.querySelector(".messages").style.display = "none"
        document.querySelector(".full-message").style.display = "none"
        document.querySelector(".music-player").style.display = "none"
        document.querySelector(".fa-music").style.color = "#393e46"
        document.querySelector(".fa-comments").style.color = "#393e46"
        $icon.style.color = "white"

    } else if ((window.getComputedStyle($icon).color === "rgb(255, 255, 255)")) {

        document.querySelector(".date-time").style.display = "block"
        document.querySelector(".messages").style.display = "flex"
        document.querySelector(".full-message").style.display = "none"
        document.querySelector(".music-player").style.display = "block"
        document.querySelector(".fa-music").style.color = "#393e46"
        document.querySelector(".fa-comments").style.color = "#393e46"
        $icon.style.color = "#393e46"
    }

}

function startPauseTimer() {
    let $playPause = document.querySelector(".play-timer")
    let $timer = document.querySelector(".timer")

    // 
    $playPause.classList = $playPause.classList[1] === "fa-play" ? "fa fa-pause play-timer" : "fa fa-play play-timer"
    if ($playPause.classList[1] === "fa-pause") {
        id = setInterval(() => {
            // if ($playPause.classList[1] == "fa-pause") {
            seconds += 1
            if (seconds == 61) {
                seconds = 0;
                minutes += 1;
            }
            if (minutes == 61) {
                seconds = 0
                minutes = 0
                hrs += 1
            }
            // }
            console.log("in");
            $timer.innerHTML = `${hrs < 10 ? `0${hrs}`:hrs}:${minutes < 10 ? `0${minutes}`:minutes}:${seconds < 10 ? `0${seconds}`:seconds}`
        }, 1000)
    } else if ($playPause.classList[1] === "fa-play") {
        clearInterval(id)
    }
}

function getTimeStamp() {

    let $timestampContainer = document.querySelector(".timestamp-container")
    //     <div class="container">
    //     <p>1</p>
    //     <p class="timestamp">00:00:00</p>
    //   </div>
    // below code will create tags as per above comment

    let $container = document.createElement("div")
    $container.classList = "container"

    let $number = document.createElement("p")
    $number.appendChild(document.createTextNode(++timestampCount))
    $container.appendChild($number)

    let $timestamp = document.createElement("p")
    $timestamp.classList = "timestamp"
    $timestamp.appendChild(document.createTextNode(document.querySelector(".timer").innerHTML))
    $container.appendChild($timestamp)
    $timestampContainer.appendChild($container)

}

function stop() {
    clearInterval(id)
    document.querySelector(".timer").innerHTML = "00:00:00"
    document.querySelector(".play-timer").classList = "fa fa-play play-timer"
    document.querySelector(".timestamp-container").innerHTML = ""
}

export {
    countdownTimer,
    startPauseTimer,
    getTimeStamp,
    stop
}