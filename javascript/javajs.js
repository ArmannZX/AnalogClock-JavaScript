const Hour = document.getElementById("hour");
const Min = document.getElementById("min");
const Sec = document.getElementById("sec");

function SetStartTime() {
  let date = new Date();
  let sec = date.getSeconds() * 6;
  let min = date.getMinutes() * 6;
  let hour = date.getHours() * 30;
  Sec.style.transform = "rotateZ(" + sec + "deg)";
  Min.style.transform = "rotateZ(" + min + "deg)";
  Hour.style.transform = "rotateZ(" + (hour + min / 12) + "deg)";
}
SetStartTime();
window.setInterval(function () {
  let date = new Date();
  let sec = date.getSeconds();
  let min = date.getMinutes();
  let hour = date.getHours() * 30;
  console.log("sec:" + sec + " min:" + min);
  Sec.style.transform = "rotateZ(" + sec * 6 + "deg)";
  let TotalDegSec = (Sec.style.transform = "rotateZ(" + sec * 6 + "deg)");
  let TotalDegMin = (Min.style.transform = "rotateZ(" + min * 6 + "deg)");
  console.log("sec: " + TotalDegSec + " min: " + TotalDegMin);
  if (TotalDegSec == "rotateZ(0deg)") {
    Min.style.transform = "rotateZ(" + min * 6 + "deg)";
  }
  Hour.style.transform = "rotateZ(" + (hour + (min * 6) / 12) + "deg)";
}, 1000);
