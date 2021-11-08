//declare variables for DOM appending

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
    const caption = res.data.lines;
    renderCaption(caption);
  } catch (error) {
    alert(`error loading caption`);
  }
}

//function to collect random line from poem
function rdmline() {
  //assign variable to math.random(min, caption.length)
  //assign newVariable to math.round(variable)
  //return caption[newVariable]
}

//function to render random comic
function renderComic(cartoon) {
  //append cartoon to div in HTML
}

//function to render caption
//randomize line selection
function renderCaption(caption) {
  //append caption to Div below cartoon
}

//event listener for navbar

//event listener for user input for caption
