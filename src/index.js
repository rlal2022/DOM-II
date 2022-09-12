import { waitForElementToBeRemoved } from "@testing-library/dom";
import { EvalSourceMapDevToolPlugin } from "webpack";
import "./less/index.less";

// Your code goes here!

const logo = document.querySelector(".logo-heading");
logo.addEventListener("mouseenter", (event) => {
  event.target.style.color = "red";
});

const blur = document.querySelector("nav a");
blur.addEventListener("blur", (event) => {
  blur.target.style.color = "green";
});

const dblclick = document.querySelector("footer p");
dblclick.addEventListener("dblclick", (event) => {
  dblclick.textContent = "You clicked me!";
});

const resize = document.querySelector(".intro h2");
resize.addEventListener("resize", (event) => {
  resize.textContent = "This page has been resized";
});

const wheel = document.querySelectorAll("*");
wheel.addEventListener("wheel", (event) => {
  wheel.classList.remove("p");
});
