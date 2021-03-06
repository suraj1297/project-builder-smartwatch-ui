// This file handles everything regarding displaying time on smartwatch


function setTime() {
    // will show the current time on smartwatch
    let date = new Date()
    let time = `${date.getHours() < 9 ? `0${date.getHours()}`: date.getHours()}:${date.getMinutes() < 9?`0${date.getMinutes()}`:date.getMinutes()}`
    document.querySelector(".primary-time").innerHTML = time
    document.querySelector(".secondary-time").innerHTML = time
    document.querySelector(".day").innerHTML = day(date.getDay())
}

function day(number) {
    switch (number) {
        case 0:
            return "Sunday"
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thrusday"
        case 5:
            return "Friday"
        case 6:
            return "Saturday"
    }
}

export {
    setTime
}