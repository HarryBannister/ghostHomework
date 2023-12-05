/************
 * N.B. The ghosts are SVGs, so it's 'fill', not 'color' you need to change
 *************/

// GET BY ID

const firstGhostRef = document.getElementById("first_ghost");

firstGhostRef.style.fill = "orange";

// GET BY CLASSNAME
const blueGhosts = document.getElementsByClassName("second_wave");
for (let i = 0; i < blueGhosts.length; i++) {
  blueGhosts[i].style.fill = "blue";
}

// GET AREA, DRILL DOWN using GET BY TAG NAME

const area51Ref = document.getElementById("area-51");
const greenGhosts = area51Ref.getElementsByTagName("svg");
for (let i = 0; i < greenGhosts.length; i++) {
  greenGhosts[i].style.fill = "green";
}

// querySelector nth-child

const redGhost = document.querySelector("#area-51 svg:nth-child(3)");
redGhost.style.stroke = "red";
redGhost.style.strokeWidth = "15px";

// from the last child, select the div immediately above the ghost and make its border '5px dashed'

const parentDivRef = document.querySelector(
  "#area-51 svg:nth-child(3)"
).parentElement;
parentDivRef.style.borderStyle = "dashed";
parentDivRef.style.borderWidth = "5px";

// querySelectorAll

const allRedGhost = document.querySelectorAll("#area-50 svg");
for (let i = 0; i < allRedGhost.length; i++) {
  allRedGhost[i].style.fill = "red";
}
