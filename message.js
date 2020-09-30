// This file handles everything regarding messages

var selected = false;

function showMsgList(set) {

    if (set != undefined) {
        selected = set;
    }

    if (!selected) {
        document.querySelector(".date-time").style.display = "none"
        document.querySelector(".messages").style.display = "flex"
        document.querySelector(`.btn`).style.color = "#393e46";
        document.querySelector(`.fa-comments`).style.color = "white";
        document.querySelector(".full-message").style.display = "none"
        selected = true;

    } else {
        document.querySelector(".date-time").style.display = ""
        document.querySelector(".messages").style.display = "none"
        document.querySelector(".btn").style.color = "#393e46";
        document.querySelector(".full-message").style.display = "none"
        selected = false
    }

}

function showMsg(msg) {
    let $element = document.querySelector(".full-message p")
    if (msg == "java")
        $element.innerHTML = `Java is high level programming language developed by sun Microsystems.`
    else if (msg == "html")
        $element.innerHTML = "HTML is Hyper Text MarkUp Language which is the skeleton of websites."
    else if (msg == "css")
        $element.innerHTML = "Css is used to add colors to website so that it will look more attractive."
    else if (msg == "javascript")
        $element.innerHTML = "Javascript adds life to websites. Java and Javascript are different."

    document.querySelector(".messages").style.display = "none"
    document.querySelector(".full-message").style.display = "block"

}



export {
    showMsgList,
    showMsg
}