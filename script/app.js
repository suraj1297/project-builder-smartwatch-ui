import {
    setTime
} from "./home.js"

import {
    showMsgList,
    showMsg
} from "./message.js"

import {
    changeMusic,
    playPause,
    forwardBackward,
    musicPlayer
} from "./music.js"

import {
    countdownTimer,
    startPauseTimer,
    getTimeStamp,
    stop
} from "./countdown.js"

// script updates the time in smartwatch ui //
setTime()

// as the time changes setTime function will be called.
setInterval(setTime, 60 - new Date().getSeconds())



///////////////////////////////////////////////////////////////////////////////////////////////////////////

// Messages //

// when user clicks on message-icon this function will show the list of messages
document.querySelector(".fa-comments").addEventListener("click", () => showMsgList())

// when user clicks on any message title the whole mssg will be diplayed
document.querySelector(".java").addEventListener("click", () => showMsg("java"))
document.querySelector(".html").addEventListener("click", () => showMsg("html"))
document.querySelector(".css").addEventListener("click", () => showMsg("css"))
document.querySelector(".javascript").addEventListener("click", () => showMsg("javascript"))


document.querySelector(".full-message i").addEventListener("click", () => showMsgList(true))

// ///////////////////////////////////////////////////////////////////////////////////////////////////////
// music //

document.querySelector(".fa-music").addEventListener("click", musicPlayer)

var $musicList = document.querySelectorAll(".name")
$musicList.forEach(element => element.addEventListener("click", (element) => {
    changeMusic(element)
}))


document.querySelector(".controller").addEventListener("click", playPause)

document.querySelector(".next").addEventListener("click", () => {
    forwardBackward("forward")
})

document.querySelector(".previous").addEventListener("click", () => {
    forwardBackward()
})

/////////////////////////////////////////////////////////////////////////////////////////
// coutdown timer //

// when clock icon is clicked the countdown timer screen is shown
document.querySelector(".fa-clock-o").addEventListener("click", countdownTimer)

// when play/pause timer button is clicked it will either start the countdown or will pause
document.querySelector(".play-timer").addEventListener("click", startPauseTimer)

// when flag button is clicked it will print the timestamp of its click timing
document.querySelector(".fa-flag").addEventListener("click", getTimeStamp)

// when stop icon is clicked it will reset the timer and timestamps
document.querySelector(".fa-stop").addEventListener("click", stop)