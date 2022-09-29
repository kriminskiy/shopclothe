function favorite() {
  let heartArray = document.querySelectorAll(".heart");

  for (let val of heartArray) {
    val.addEventListener("click", function (e) {
      e.stopPropagation();
      let id = val.parentNode.parentNode.getAttribute("data-id");
      if (localStorage.getItem("favorite") == null) {
        let json = JSON.stringify([id]);
        localStorage.setItem("favorite", json);
      } else {
        let json = localStorage.getItem("favorite");
        let array = JSON.parse(json);
        array.push(id);
        json = JSON.stringify(array);
        localStorage.setItem("favorite", json);
      }
      console.log(localStorage.getItem("favorite"));
      val.style.color = "red";
    });
  }
}
export default favorite;
