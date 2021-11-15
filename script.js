let containerDiv = document.querySelector(".container");
let cartoonDiv = document.createElement("div");
let captionDiv = document.createElement("div");
cartoonDiv.classList.add("cartoon-div");
captionDiv.classList.add("caption-div");
let searchForm = document.querySelector(".searchfield");
let favoriteForm = document.querySelector(".set-favorite");
let randomBtn = document.getElementById("random");
let userBtn = document.getElementById("usergenerated");
let favBtn = document.getElementById("favorite");
let inputField = document.createElement("input");
let searchBtn = document.createElement("button");
let setFavorite = document.createElement("button");
let intro = document.getElementById("intro");
containerDiv.appendChild(cartoonDiv);
containerDiv.appendChild(captionDiv);
searchBtn.type = "submit";
searchBtn.innerText = "Submit";
setFavorite.type = "submit";
setFavorite.innerText = "Save Favorite";
inputField.type = "text";
inputField.placeholder = "Enter caption here";

async function rdmCartoon() {
  const url = `https://www.newyorker.com/cartoons/random/randomAPI`;
  try {
    const res = await axios.get(url);
    const cartoon = res.data[0].src;
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
    rdmLine(caption);
  } catch (error) {
    alert(error);
  }
}

function rdmLine(caption) {
  let rdmLineIndex = Math.round(Math.random() * caption.length);
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
  }
  favoriteForm.appendChild(setFavorite);
}

function renderCartoon(cartoon) {
  let cartoonImg = document.createElement("img");
  cartoonImg.setAttribute("id", "image");
  cartoonImg.src = cartoon;
  cartoonDiv.appendChild(cartoonImg);
}

function renderCaption(caption) {
  let newCaption = document.createElement("div");
  newCaption.innerText = caption;
  captionDiv.appendChild(newCaption);
  favoriteForm.appendChild(setFavorite);
}

function clearDiv() {
  intro.innerHTML = "";
  cartoonDiv.innerHTML = "";
  captionDiv.innerHTML = "";
  searchForm.innerHTML = "";
  favoriteForm.innerHTML = "";
}

randomBtn.addEventListener("click", (e) => {
  e.preventDefault();
  clearDiv();
  rdmCartoon();
  rdmCaption();
});

userBtn.addEventListener("click", (e) => {
  e.preventDefault();
  clearDiv();
  searchForm.appendChild(inputField);
  searchForm.appendChild(searchBtn);
});

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let userCaption = inputField.value;
  clearDiv();
  rdmCartoon();
  renderCaption(userCaption);
  searchForm.innerHTML = "";
});

favBtn.addEventListener("click", (e) => {
  clearDiv();
  let savedCartoon = localStorage.getItem("favComic");
  renderCartoon(savedCartoon);
  let savedCaption = localStorage.getItem("favCaption");
  renderCaption(savedCaption);
  favoriteForm.innerHTML = "";
});

favoriteForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let curImage = document.getElementById("image").src;
  localStorage.setItem("favComic", curImage);
  localStorage.setItem("favCaption", captionDiv.innerText);
});
