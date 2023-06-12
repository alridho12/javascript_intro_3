const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};

cekHariKerja("selasa")
  .then((hari) => {
    console.log("hari ini hari kerja"); // then disini berfungsi sebagai respon yang dilakukan saat promise kondisi resolve
  })
  .catch((error) => {
    console.log(error.message); //cath disini berfungsi sebagai respon yang dilakukan saat promise kondisi reject
  });

let printHari = async () => {
  try {
    let result = await cekHariKerja("sabtu");
    console.log("Hari ini hari kerja");
  } catch (error) {
    console.log(error.message);
  }
};

printHari();
