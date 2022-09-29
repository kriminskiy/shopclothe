import ajax from "./ajax.js";

function single() {
  let itemArray = document.querySelectorAll(".item");
  for (let val of itemArray) {
    val.addEventListener("click", function () {
      let id = val.getAttribute("data-id");

      ajax("products/" + id).then(function (response) {
        let div = document.createElement("div");
        let close = document.createElement("button");
        let cover = document.createElement("div");
        cover.style.width = "100%";
        cover.style.height = "100%";
        cover.style.background = "black";
        cover.style.position = "fixed";
        cover.style.zIndex = "444";
        cover.style.left = "0";
        cover.style.top = "0";
        cover.style.opacity = "0.5";
        close.classList.add("btn");
        close.innerHTML = "close";
        close.addEventListener("click", function () {
          div.remove();
          cover.remove();
        });

        div.style.width = "800px";
        div.style.height = "80vh";
        div.style.border = "2px solid grey";
        div.style.position = "fixed";
        div.style.zIndex = "555";
        div.style.left = "50%";
        div.style.top = "0";
        div.style.marginTop = "10vh";
        div.style.marginLeft = "-400px";
        div.style.background = "white";
        div.style.padding = "60px 30px";
        div.style.display = "grid";
        div.style.gridTemplateColumns = "1fr 2fr";

        let img = document.createElement("img");
        let h4 = document.createElement("h4");
        let h3 = document.createElement("h3");
        let p = document.createElement("p");
        let b = document.createElement("b");
        let innerDiv = document.createElement("div");

        innerDiv.style.display = "flex";
        innerDiv.style.flexDirection = "column";
        innerDiv.style.gap = "30px";
        innerDiv.append(h4, p, b, h3);
        img.src = response.image;
        img.style.width = "70%";
        h4.innerHTML = response.title;
        p.innerHTML = response.description;
        h3.innerHTML = response.price;
        b.innerHTML = response.category;

        div.append(close, img, innerDiv);
        document.body.append(div, cover);
        console.log(response);
      });
    });
  }
}
export default single;
