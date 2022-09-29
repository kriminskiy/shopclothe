import category from "./categoty.js";
import favorite from "./favorite.js";
import showProducts from "./showProducts.js";
import single from "./single.js";
import sort from "./sort.js";
category();
showProducts().then(function () {
  single();
  favorite();
});
sort();
