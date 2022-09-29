import ajax from "./ajax.js";
import favorite from "./favorite.js";
import showProducts from "./showProducts.js";
import single from "./single.js";
function category() {
  let div = document.querySelector(".sidebar");
  let innerDiv = document.createElement("div");

  ajax("products/categories").then(function (response) {
    let all = document.createElement("a");
    all.innerHTML = "Show all";
    all.href = "/index.html";
    innerDiv.append(all);
    for (let name of response) {
      let a = document.createElement("a");
      a.addEventListener("click", function () {
        showProducts().then(function () {
          single();
          favorite();
        });
      });
      a.innerHTML = name;
      a.href = "#" + name;
      innerDiv.append(a);
    }

    div.append(innerDiv);
  });
}
export default category;
