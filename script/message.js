// This file handles everything regarding messages

function showMsgList(istrue = false) {
  /**
   * Function display messages app or closes depending upon its previous state
   *
   * rgb(57, 62, 70) -> music app was off turn it on
   *rgb(255, 255, 255)-> music is on turn close the app
   */

  let $icon = document.querySelector(".fa-comments");
  if (window.getComputedStyle($icon).color === "rgb(57, 62, 70)" || istrue) {
    document.querySelector(".date-time").style.display = "none";
    document.querySelector(".messages").style.display = "flex";
    document.querySelector(".fa-music").style.color = "#393e46";
    document.querySelector(".fa-clock-o").style.color = "#393e46";
    document.querySelector(".full-message").style.display = "none";
    $icon.style.color = "white";
  } else if (window.getComputedStyle($icon).color === "rgb(255, 255, 255)") {
    document.querySelector(".date-time").style.display = "block";
    document.querySelector(".full-message").style.display = "none";
    document.querySelector(".fa-music").style.color = "#393e46";
    document.querySelector(".fa-clock-o").style.color = "#393e46";
    $icon.style.color = "#393e46";
  }
}

function showMsg(msg) {
  /**
   * Function shows the complete message when the message title is clicked
   */
  let $element = document.querySelector(".full-message p");
  if (msg == "java")
    $element.innerHTML = `Java is high level programming language developed by sun Microsystems.`;
  else if (msg == "html")
    $element.innerHTML =
      "HTML is Hyper Text MarkUp Language which is the skeleton of websites.";
  else if (msg == "css")
    $element.innerHTML =
      "Css is used to add colors to website so that it will look more attractive.";
  else if (msg == "javascript")
    $element.innerHTML =
      "Javascript adds life to websites. Java and Javascript are different.";

  document.querySelector(".messages").style.display = "none";
  document.querySelector(".full-message").style.display = "block";
}

export { showMsgList, showMsg };
