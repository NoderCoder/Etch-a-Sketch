let mainbody = document.querySelector("body");

let parentDiv = document.createElement("div");
parentDiv.setAttribute("id","mainWrapper");
parentDiv.style.display = "grid";
parentDiv.style.gridTemplateColumns = "repeat(16,1fr)"
parentDiv.style.border = "1px solid red";
parentDiv.style.fontSize = "10px";
parentDiv.style.backgroundColor = "white";
mainbody.appendChild(parentDiv);

// inner Child Divs

for (let y = 1; y <= 16; y++) {
    for (var x = 1; x <= 16; x++) {
        let childDiv = document.createElement("div");
        childDiv.classList.add("old-background");
        childDiv.setAttribute("id", ("R" + y + "C" + x));
        childDiv.textContent = "R" + y + "C" + x;
        childDiv.setAttribute("style", "height:50px;width:auto");
        childDiv.style.border = "1px solid black";
        parentDiv.appendChild(childDiv);
    }
}

// event listners
function changeColor1() {
    console.log(this.id);
    const cDivChange = document.getElementById(this.id);
    cDivChange.style.backgroundColor = "pink";
    // cDivChange.classList.add = "new-background";   
}
const cDivs = document.querySelectorAll('.old-background');
cDivs.forEach(cD => cD.addEventListener('mouseenter',changeColor1));

