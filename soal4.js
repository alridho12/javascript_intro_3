const { default: axios } = require("axios");

axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    const user = res.data;
    const name = user.map((user) => user.name);
    console.log(`name:${name}`);
  })
  .catch((err) => {
    console.log("Error");
  });
