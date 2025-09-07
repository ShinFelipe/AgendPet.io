const inputData = document.querySelectorAll(
  "input[type='date'], input[type='time']"
);

const btnAbrir = document.querySelectorAll("#abrir-calendario");

btnAbrir.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    console.log(inputData[index]);

    if (inputData[index].showPicker) {
      inputData[index].showPicker();
    }
  });
});
