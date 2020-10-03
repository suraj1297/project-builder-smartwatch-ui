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
        document.querySelector(".music-player").style.display = "block"
        document.querySelector(".fa-comments").style.color = "#393e46"
        document.querySelector(".fa-clock-o").style.color = "#393e46"
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

        // clearInterval(id)
    }
}

function changeMusic(e) {

    const $element = e.srcElement
    let name = $element.innerText;
    let artist = $element.classList[1]

    document.querySelector(".titleName").innerHTML = name
    document.querySelector(".artist").innerHTML = artist.split("-").join(" ")

    let $music = document.querySelector(currentMusic)
    if ($music)
        $music.load()

    currentMusic = `.music-${name.split(" ").join("-")}`
    console.log(currentMusic)
    currentMusicNumber = numberArray.indexOf($element.classList[2])
    document.querySelector(".controller").classList = "fa fa-play controller"
    console.log(`url("images/${name.split(" ").join("-")}.jpg")`)
    document.querySelector(".play-pause").style.backgroundImage = `url("images/${name.split(" ").join("-")}.jpg")`
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

    setInterval(() => {
        console.log($progress)
        console.log("progress", $progress.getAttribute("value"))

        let progressValue = parseInt($progress.value)
        let currTime = progressValue
        if (Math.abs(lastTime - currTime) > 3) {
            console.log("progress", progressValue)
            music.currentTime = progressValue
        }
        lastTime = progressValue

        $progress.setAttribute("value", `${Math.ceil((music.currentTime*100)/totalTime)}`)
        // $progress.value = `${(music.currentTime*100)/totalTime}`
        console.log($progress)

        if ((music.currentTime * 100) / totalTime == 100 && currentMusicNumber !== 7)
            forwardBackward("forward")
    }, 1000)

}



export {
    changeMusic,
    playPause,
    forwardBackward,
    musicPlayer
}