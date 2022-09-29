function ajax(uri) {
  return new Promise(function (resolve, reject) {
    let host = "https://fakestoreapi.com/";

    fetch(host + uri)
      .then(function (response) {
        if (response.status == 200) {
          return response.json();
        } else {
          console.error("request is bed");
          reject();
        }
      })
      .then(function (response) {
        resolve(response);
      })
      .catch(function () {
        console.error("ajax error");
        reject();
      });
  });
}
export default ajax;
