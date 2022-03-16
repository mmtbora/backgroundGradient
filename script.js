let colorOne = document.getElementById("clr1");
let colorTwo = document.getElementById("clr2");
let bodycolor = document.getElementById("bodyy");
let colorCodes = document.getElementById("colorCodes");



colorOne.addEventListener("change", setBodyColor);

colorTwo.addEventListener("change", setBodyColor);


function setBodyColor() {
    bodycolor.style.background = "linear-gradient(to right, " + colorOne.value + "," + colorTwo.value + ")";
    colorCodes.textContent = "Left color = " + colorOne.value + "  --  Right color = " + colorTwo.value;
}