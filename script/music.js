var currentMusic = ".music-Memories"

var currentMusicNumber = 1

var numberArray = ["zero", "one", "two", "three", "four", "five", "six", "seven"]

var id = null;

function musicPlayer() {
    let $icon = document.querySelector(".fa-music")
    if (window.getComputedStyle($icon).color === "rgb(57, 62, 70)") {
        document.querySelector(".date-time").style.display = "none"
        document.querySelector(".messages").style.display = "none"
        document.querySelector(".full-message").style.display = "none"
        document.querySelector(".btn").style.color = "#393e46"
        $icon.style.color = "white"
    } else if ((window.getComputedStyle($icon).color === "rgb(255, 255, 255)")) {
        document.querySelector(".date-time").style.display = "block"
        document.querySelector(".messages").style.display = "flex"
        document.querySelector(".fa-comments").style.color = "#393e46"
        document.querySelector(".fa-clock-o").style.color = "#393e46"
        $icon.style.color = "#393e46"
        document.querySelector(".controller").classList = "fa fa-play controller"
        let $music = document.querySelector(currentMusic)
        if ($music)
            $music.load()

        clearInterval(id)
    }
}

function changeMusic(e) {

    const $element = e.srcElement
    let name = $element.innerText;
    let artist = $element.classList[1]

    console.log($element);
    console.log(name);
    document.querySelector(".titleName").innerHTML = name
    document.querySelector(".artist").innerHTML = artist.split("-").join(" ")

    let $music = document.querySelector(currentMusic)
    if ($music)
        $music.load()

    currentMusic = `.music-${name.split(" ").join("-")}`
    console.log(currentMusic)
    currentMusicNumber = numberArray.indexOf($element.classList[2])
    document.querySelector(".controller").classList = "fa fa-play controller"
    playPause()

}



function playPause() {

    let $icon = document.querySelector(".controller")

    let $music = document.querySelector(currentMusic)
    if ($icon.classList[1] == "fa-pause")
        $music.pause()
    else {
        $music.play()
        track($music)
    }

    $icon.classList = $icon.classList[1] == "fa-pause" ? "fa fa-play controller" : "fa fa-pause controller"
}


function forwardBackward(direction) {
    if (direction === "forward") {
        currentMusicNumber += 1
    } else {
        currentMusicNumber -= 1
    }

    if (currentMusicNumber > 7)
        currentMusicNumber = 7
    else if (currentMusicNumber < 1)
        currentMusicNumber = 1

    changeMusic({
        srcElement: document.querySelector(`.${numberArray[currentMusicNumber]}`)
    })
}

function track(music) {
    let totalTime = music.duration
    let $progress = document.querySelector(".progress")
    $progress.value = 0
    let lastTime = 0

    id = setInterval(() => {

        let currTime = $progress.value
        if (Math.abs(lastTime - currTime) > 3) {
            console.log("progress", $progress.getAttribute("value"))
            music.currentTime = $progress.value
        }
        lastTime = $progress.value
        $progress.setAttribute("value", `${(music.currentTime*100)/totalTime}`)
        if ((music.currentTime * 100) / totalTime == 100)
            forwardBackward("forward")
    }, 1000)
}



export {
    changeMusic,
    playPause,
    forwardBackward,
    musicPlayer
}