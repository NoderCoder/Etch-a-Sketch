
// Calc for the resizing the grid
let gridSizeNumber = 16;
let mainWrapperSize = 480; //in pixles
let mainWrapperColumns = gridSizeNumber; //num
let mainWrapperRows = gridSizeNumber; //num
let individualRowSize = mainWrapperSize/mainWrapperRows;
let individualColumnSize = mainWrapperSize/mainWrapperColumns;

//main body 
let mainbody = document.querySelector("body");
mainbody.style.height = "100vh";
// mainbody.style.width = "100vw";
mainbody.style.border = "1px dotted blue";
mainbody.style.padding = "0px";
mainbody.style.display = "grid";
mainbody.style.gridGap ="10px";
mainbody.style.alignContent = "center";
mainbody.style.gridTemplateColumns = "10vw auto auto 10vw"
// mainbody.style.gridTemplate = "20px auto 40px / 10vw auto 10vw";




let clearGridBtn = document.createElement("button");
clearGridBtn.setAttribute("id","clearGrid");
clearGridBtn.textContent = "Click me to clear the grid :)";
mainbody.appendChild(clearGridBtn);



//Parent DIv Properties
let parentDiv = document.createElement("div");
parentDiv.setAttribute("id","mainWrapper");
parentDiv.style.display = "grid";
parentDiv.style.width = mainWrapperSize + "px";
parentDiv.style.gridTemplateColumns = "repeat("+ mainWrapperColumns + "," + individualColumnSize + "px)";
parentDiv.style.gridTemplateRows = "repeat("+ mainWrapperRows + "," + individualRowSize + "px)";
parentDiv.style.border = "1px solid red";
parentDiv.style.fontSize = "8px";
parentDiv.style.textAlign = "center";
parentDiv.style.backgroundColor = "lightblue";
mainbody.appendChild(parentDiv);

// inner Child Divs properties

for (let y = 1; y <= 16; y++) {
    for (var x = 1; x <= 16; x++) {
        let childDiv = document.createElement("div");
        childDiv.classList.add("old-background");
        childDiv.setAttribute("id", ("R" + y + "C" + x));
        childDiv.textContent = "R" + y + "C" + x;
        childDiv.setAttribute("style", "height:auto;width:auto");
        childDiv.style.border = "1px solid black";
        parentDiv.appendChild(childDiv);
    }
}

let inputBox = document.createElement("INPUT");
inputBox.setAttribute("id","gridInputData");
inputBox.setAttribute('type','text');
inputBox.setAttribute("placeholder", "Enter the number oof grid size. Eg. 16 will make a grid a box of 16x16");
inputBox.style.width = "300px";
inputBox.style.height= "80px";
mainbody.appendChild(inputBox);

let changeGridBtn = document.createElement("button");
changeGridBtn.setAttribute("id","changeGrid");
changeGridBtn.textContent = "Click me to change the grid)";
mainbody.appendChild(changeGridBtn);




// change color over hover function
function changeColor1() {
    console.log(this.id);
    const cDivChange = document.getElementById(this.id);
    cDivChange.style.backgroundColor = "pink";
    // cDivChange.classList.add = "new-background";   
}
//Clear grid function
function clearGrid(){
    console.log(this.id);
    let childDivGrabber = document.querySelectorAll(".old-background");
    childDivGrabber.forEach(cDG => cDG.style.backgroundColor="white");
    }
//change grid functuon

function changeGrid(){
    console.log(this.id);
    let ipDataGrabber = document.getElementById("gridInputData");
    gridSizeNumber=ipDataGrabber.value;
    console.log(gridSizeNumber);
}
// event listners
const cDivs = document.querySelectorAll('.old-background');
cDivs.forEach(cD => cD.addEventListener('mouseenter',changeColor1));
clearGridBtn.addEventListener("click",clearGrid);
changeGridBtn.addEventListener("click",changeGrid);