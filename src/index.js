const array = ["blue", "red", "black", "white", "green"];
const app = document.getElementById("app");

const colorish = array.map((item) => {
  return `${item}ish`;
});

app.insertAdjacentHTML("beforeend", colorish.join(', '));
