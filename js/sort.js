function sort() {
  let one = document.querySelector("#one");
  let two = document.querySelector("#two");
  let content = document.querySelector(".content");
  one.addEventListener("click", function () {
    content.style.gridTemplateColumns = "repeat(2, 2fr)";
    two.addEventListener("click", function () {
      content.style.gridTemplateColumns = "repeat(4, 1fr)";
    });
  });
}

export default sort;
