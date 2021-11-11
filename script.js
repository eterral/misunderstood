//declare variables for DOM appending
// cartoonDiv = document.getElementsByClassName("cartoon");
// captionDiv = document.getElementsByClassName("caption");
let containerDiv = document.querySelector(".container");
let cartoonDiv = document.createElement("div");
let captionDiv = document.createElement("div");
cartoonDiv.classList.add("cartoon-div");
captionDiv.classList.add("caption-div");
let searchForm = document.querySelector(".searchfield");
let randomBtn = document.getElementById("random");
let userBtn = document.getElementById("usergenerated");
let inputField = document.createElement("input");
let searchBtn = document.createElement("button");
// Set types for field & buttons ot be claled in event listeners
containerDiv.appendChild(cartoonDiv);
containerDiv.appendChild(captionDiv);
searchBtn.type = "submit";
searchBtn.innerText = "Submit";
inputField.type = "text";
inputField.placeholder = "Enter caption here";

//axios functions to get random cartoon & random poem
async function rdmCartoon() {
  const url = `https://www.newyorker.com/cartoons/random/randomAPI`;
  try {
    const res = await axios.get(url);
    const cartoon = res.data;
    console.log(cartoon);
    renderCartoon(cartoon);
  } catch (error) {
    alert(error);
  }
}

async function rdmCaption() {
  const url = "https://poetrydb.org/random";
  try {
    const res = await axios.get(url);
    const caption = res.data[0].lines;
    console.log(caption);
    rdmLine(caption);
  } catch (error) {
    alert(error);
  }
}

//function to collect random line from poem
function rdmLine(caption) {
  //assign variable to math.random(min, caption.length)
  let rdmLineIndex = Math.round(Math.random() * caption.length);
  //write recusive fuctnion to rerandomize empty strings
  if (
    caption[rdmLineIndex].endsWith(",") ||
    caption[rdmLineIndex].endsWith(";") === true
  ) {
    caption[rdmLineIndex] = caption[rdmLineIndex].slice(0, -1);
  }
  if (caption[rdmLineIndex] === "") {
    rdmLine(caption);
  } else {
    renderCaption(caption[rdmLineIndex]);
    console.log(caption[rdmLineIndex]);
  }
  //assign newVariable to math.round(variable)
  //return caption[newVariable]
  // console.log(caption[rdmLine]);
  // return caption[rdmLine];
}
//function to render random comic
function renderCartoon(cartoon) {
  //append cartoon to div in HTML
  // let cartoonDiv = document.createElement("div");
  // containerDiv.appendChild(cartoonDiv);
  let cartoonImg = document.createElement("img");
  cartoonImg.src = cartoon[0].src;
  cartoonDiv.appendChild(cartoonImg);
}

//function to render caption
//randomize line selection
function renderCaption(caption) {
  //append caption to Div below cartoon
  // let captionDiv = document.createElement("div");
  // containerDiv.appendChild(captionDiv);
  let newCaption = document.createElement("div");
  newCaption.innerText = caption;
  captionDiv.appendChild(newCaption);
}

function clearDiv() {
  cartoonDiv.innerHTML = "";
  captionDiv.innerHTML = "";
}

//event listener for navbar
randomBtn.addEventListener("click", (e) => {
  e.preventDefault();
  userCaption = "";
  clearDiv();
  console.log("click");
  rdmCartoon();
  rdmCaption();
});
//event listener for user input for caption

userBtn.addEventListener("click", (e) => {
  e.preventDefault();
  clearDiv();
  searchForm.appendChild(inputField);
  searchForm.appendChild(searchBtn);
});

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("click");
  let userCaption = inputField.value;
  clearDiv();
  rdmCartoon();
  renderCaption(userCaption);
  searchForm.innerHTML = "";
});

///write function for clearing divs
