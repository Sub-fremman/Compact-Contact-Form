const form = document.querySelector("form"),
  nextBtn = form.querySelector(".nextBtn"),
  backBtn = form.querySelector(".backBtn"),
  allInput = form.querySelectorAll(".first input");

nextBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Prevents form submission

  let allFieldsFilled = true; // Track if all fields are filled

  allInput.forEach((input) => {
    if (input.value === "") {
      allFieldsFilled = false; // Not all fields are filled
    }
  });

  if (allFieldsFilled) {
    form.classList.add("secActive");
  } else {
    form.classList.remove("secActive");
  }
});

// nextBtn.addEventListener("click", () => {
//   allInput.forEach((input) => {
//     if (input.value != "") {
//       form.classList.add("secActive");
//     } else {
//       form.classList.remove("secActive");
//     }
//   });
// });

backBtn.addEventListener("click", () => form.classList.remove("secActive"));
