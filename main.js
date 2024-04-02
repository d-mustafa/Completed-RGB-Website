// RGB Colors

// Declaring Red Green and Blue inputs for the yellow display window
let r = document.getElementById("redinput");
let g = document.getElementById("greeninput");
let b = document.getElementById("blueinput");

r.value = `255`;
g.value = `255`;
b.value = `0`;
//
//
//
//
//
//
// Preview Button Event Listener
let previewBtn = document.getElementById("previewbutton");
previewBtn.addEventListener("click", changeBgToColor);

function changeBgToColor() {
  // Input
  r = document.getElementById("redinput").value;
  g = document.getElementById("greeninput").value;
  b = document.getElementById("blueinput").value;

  // Process
  let displayWindow = document.getElementById("displaywindow");
  let rgbOutput = document.getElementById("rgboutput");

  // Output
  displayWindow.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  rgbOutput.innerHTML = `rgb(${r}, ${g}, ${b})`;
}
//
//
//
//
//
//
//
//
// Black Button Event Listener
let blackBtn = document.getElementById("blackbutton");
blackBtn.addEventListener("click", changeBgToBlack);

function changeBgToBlack() {
  // Input
  // Process
  let displayWindow = document.getElementById("displaywindow");
  let rgbOutput = document.getElementById("rgboutput");
  r = document.getElementById("redinput");
  g = document.getElementById("greeninput");
  b = document.getElementById("blueinput");

  // Output
  displayWindow.style.backgroundColor = `rgb(0, 0, 0)`;
  rgbOutput.innerHTML = `rgb(0, 0, 0)`;
  r.value = `0`;
  g.value = `0`;
  b.value = `0`;
}
//
//
//
//
//
//
//
//
//
// White Button Event Listener
let whiteBtn = document.getElementById("whitebutton");
whiteBtn.addEventListener("click", changeBgToWhite);

function changeBgToWhite() {
  // Input
  // Process
  let displayWindow = document.getElementById("displaywindow");
  let rgbOutput = document.getElementById("rgboutput");
  r = document.getElementById("redinput");
  g = document.getElementById("greeninput");
  b = document.getElementById("blueinput");

  // Output
  displayWindow.style.backgroundColor = `rgb(255, 255, 255)`;
  rgbOutput.innerHTML = `rgb(255, 255, 255)`;
  r.value = `255`;
  g.value = `255`;
  b.value = `255`;
}
