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
