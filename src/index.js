import "./less/index.less";

// Your code goes here!

// mousenter event
const logo = document.querySelector(".logo-heading");
// console.log(logo);
logo.addEventListener("mouseenter", (event) => {
  event.target.style.color = "red";
});

//load
window.addEventListener("load", (e) => {
  console.log("congrats, this statement has successfully loaded!");
});

//copy
window.addEventListener("copy", (e) => {
  console.log("text has been copied successfuly");
});

//key press event
(console) => (event) => {
  if (event.key == "F12") {
    console.log("you have opened the console successfuly!");
  }
};
document.addEventListener("click", console);

//double click
const dblclick = document.querySelector("footer p");
dblclick.addEventListener("dblclick", (event) => {
  dblclick.textContent = "You clicked me!";
});

//wheel
const wheel = document.querySelectorAll(".content-section");
// console.log(wheel);

wheel.forEach((e) => {
  e.addEventListener("wheel", e);
  e.style.color = "blue";
});

//esckey alert
function escKey(event) {
  if (event.key === "Escape") {
    alert("YOU CANNOT ESCAPE THIS PAGE!!");
  }
}
document.addEventListener("click", escKey);

//keydown event
document.addEventListener("keydown", (event) => {
  if (event.key === "F11") {
    console.log("you have entered full screen mode on this page!");
  }
});

//focus event
document.addEventListener("focus", (e) => {
  e.target.textContent = "you are focusing on this element";
});

//online event
document.addEventListener("online", (event) => {
  event.console.log("this page is online");
});
