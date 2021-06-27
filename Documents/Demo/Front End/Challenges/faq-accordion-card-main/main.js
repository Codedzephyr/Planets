const arrow = document.getElementById("team");
const indicator = document.getElementById("indicator");
const paragraph = document.getElementById("paragraph_display");
const heading = document.getElementById("members");

arrow.addEventListener("click", () => {
  if (paragraph.style.display !== "block") {
    paragraph.style.display = "block";
    heading.style.color = "black";
    indicator.style.transform = "rotate(180deg)";
  } else {
    indicator.style.transform = "rotate(0deg)";
    paragraph.style.display = "none";
    heading.style.color = "hsl(240, 6%, 50%)";
  }
});

/*2nd accordion */

const arrow1 = document.getElementById("maximum");
const indicator1 = document.getElementById("indicator1");
const paragraph1 = document.getElementById("paragraph1");
const heading1 = document.getElementById("file");

arrow1.addEventListener("click", () => {
  if (paragraph1.style.display !== "block") {
    paragraph1.style.display = "block";
    heading1.style.color = "black";
    indicator1.style.transform = "rotate(180deg)";
  } else {
    indicator1.style.transform = "rotate(0deg)";
    paragraph1.style.display = "none";
    heading1.style.color = "hsl(240, 6%, 50%)";
  }
});

/*3rd accordion*/
const arrow2 = document.getElementById("reset");
const indicator2 = document.getElementById("indicator2");
const paragraph2 = document.getElementById("paragraph2");
const heading2 = document.getElementById("password");

arrow2.addEventListener("click", () => {
  if (paragraph2.style.display !== "block") {
    paragraph2.style.display = "block";
    heading2.style.color = "black";
    indicator2.style.transform = "rotate(180deg)";
  } else {
    indicator2.style.transform = "rotate(0deg)";
    paragraph2.style.display = "none";
    heading2.style.color = "hsl(240, 6%, 50%)";
  }
});

/* 4th accordion */
const arrow3 = document.getElementById("cancel");
const indicator3 = document.getElementById("indicator3");
const paragraph3 = document.getElementById("paragraph3");
const heading3 = document.getElementById("subscription");

arrow3.addEventListener("click", () => {
  if (paragraph3.style.display !== "block") {
    paragraph3.style.display = "block";
    heading3.style.color = "black";
    indicator3.style.transform = "rotate(180deg)";
  } else {
    indicator3.style.transform = "rotate(0deg)";
    paragraph3.style.display = "none";
    heading3.style.color = "hsl(240, 6%, 50%)";
  }
});

/* 5th accordion */
const arrow4 = document.getElementById("additional");
const indicator4 = document.getElementById("indicator3");
const paragraph4 = document.getElementById("paragraph4");
const heading4 = document.getElementById("support");

arrow4.addEventListener("click", () => {
  if (paragraph4.style.display !== "block") {
    paragraph4.style.display = "block";
    heading4.style.color = "black";
    indicator4.style.transform = "rotate(180deg)";
  } else {
    indicator4.style.transform = "rotate(0deg)";
    paragraph4.style.display = "none";
    heading4.style.color = "hsl(240, 6%, 50%)";
  }
});
