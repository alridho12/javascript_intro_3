// //program untuk menampilan nama universitas di usa
// const { default: axios } = require("axios");

// axios
//   .get("http://universities.hipolabs.com/search?country=United+States")
//   .then((res) => {
//     const univ = res.data;
//     const name = univ.map((univ) => univ.name);

//     console.log(`berikut adalah daftar universitas di usa:
//     ${name}`);
//   })
//   .catch((err) => {
//     console.log("Error");
//   });

// program untuk menampilkan nama produk maybeline  
const { default: axios } = require("axios");

axios
  .get("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
  .then((res) => {
    const produk = res.data;
    const namaProduk = produk.map((produk) => produk.name);
    console.log(`berikut adalah nama-nama produk dari maybeline:
    ${namaProduk}`);
  })
  .catch((err) => {
    console.log("Error");
  });
