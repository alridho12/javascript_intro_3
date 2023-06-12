const getMonth = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;
      let month = [
        "January",
        "February",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agutus",
        "September",
        "Oktober",
        "November",
        "Desember",
      ];
      if (!error) {
        resolve(month);
      } else {
        reject(new Error("Sorry data not found"));
      }
    }, 4000);
  });
};

let printMonth = (month) => {
  month.map((item) => console.log(item));
};

getMonth()
  .then(printMonth)
  .catch((err) => console.log(err));