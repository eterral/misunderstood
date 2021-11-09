//declare variables for DOM appending
// cartoonDiv = document.getElementsByClassName("cartoon");
// captionDiv = document.getElementsByClassName("caption");
let containerDiv = document.getElementsByClassName("container");
let randomBtn = document.getElementById("random");
// document.body.appendChild(cartoonDiv);
// document.body.appendChild(captionDiv);

//axios functions to get random cartoon & random poem
async function rdmCartoon() {
  const url = `https://www.newyorker.com/cartoons/random/randomAPI`;
  try {
    const res = await axios.get(url);
    const cartoon = res.data;
    console.log(cartoon);
    renderCartoon(cartoon);
  } catch (error) {
    alert(`error loading comic`);
  }
}
async function rdmCaption() {
  const url = "https://poetrydb.org/random";
  try {
    const res = await axios.get(url);
    const caption = res.data[0].lines;
    console.log(caption);
    rdmLine(caption);
    // renderCaption(caption);
  } catch (error) {
    console.log(error);
    alert(`error loading caption`);
  }
}

//function to collect random line from poem
function rdmLine(caption) {
  //assign variable to math.random(min, caption.length)
  let rdmLine = Math.round(Math.random() * caption.length);
  //write recusive fuctnion to rerandomize empty strings
  if (caption[rdmLine] === "") {
    rdmLine(caption);
  } else {
    renderCaption(caption[rdmLine]);
  }
  //assign newVariable to math.round(variable)
  //return caption[newVariable]
  console.log(caption[rdmLine]);
  // return caption[rdmLine];
}
//function to render random comic
function renderCartoon(cartoon) {
  //append cartoon to div in HTML
  let cartoonDiv = document.createElement("div");
  containerDiv.appendChild(cartoonDiv);
  let cartoonImg = document.createElement("img");
  cartoonImg.src = cartoon[0].src;
  cartoonDiv.appendChild(cartoonImg);
  rdmCaption();
}

//function to render caption
//randomize line selection
function renderCaption(caption) {
  //append caption to Div below cartoon
  let captionDiv = document.createElement("div");
  containerDiv.appendChild(captionDiv);
  let newCaption = document.createElement("div");
  newCaption.innerText = caption;
  captionDiv[0].appendChild(newCaption);
}

//event listener for navbar
randomBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // containerDiv.innerHTML = "";
  console.log("click");
  rdmCartoon();
});
//event listener for user input for caption
