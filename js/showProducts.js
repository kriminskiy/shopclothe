import ajax from "./ajax.js";

function showProducts() {
  return new Promise(function (resolve, reject) {
    let div = document.querySelector(".content");
    div.innerHTML = "";

    ajax("products").then(function (array) {
      for (let obj of array) {
        if (window.location.hash.length > 0) {
          let hash = decodeURI(window.location.hash);
          console.log(hash, obj.category);
          if (hash == "#" + obj.category) {
            div.innerHTML += `
            <div class= 'item' data-id='${obj.id}' data-cat="${obj.category}">
            <img src='${obj.image}' height = '200px'>
                <div class = 'box'>
                    <div class = 'price'> 
                    
                    <h4>${obj.title}</h4>
                    <b>${obj.price}</b>
                    
                    </div>
                
                <i class='fa-regular fa-heart heart'></i>
                </div>
      
            </div>`;
          }
        } else {
          div.innerHTML += `
          <div class= 'item' data-id='${obj.id}' data-cat="${obj.category}">
          <img src='${obj.image}' height = '200px'>
              <div class = 'box'>
                  <div class = 'price'> 
                  
                  <h4>${obj.title}</h4>
                  <b>${obj.price}</b>
                  
                  </div>
              
              <i class='fa-regular fa-heart heart'></i>
              </div>
    
          </div>`;
        }
      }
      resolve();
    });
  });
}

export default showProducts;
