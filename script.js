function validateString(input) {
  const regex = /^(?![-_+])[\w]{5,}$/;
  return regex.test(input);
}

function clearForm() {
  const fields = document.getElementsByClassName("field input");
  fields.forEach((field) => {
    field.value = "";
  });
}

function validateForm(e) {
  e.preventDefault();

  const fields = Array.from(document.querySelectorAll(".field input"));
  const validationStrings = document.querySelectorAll(".validation_string");

  validationStrings.forEach((string) => {
    string.style.display = "none";
  });

  fields.slice(1).forEach((field, i) => {
    if (!validateString(field.value)) {
      validationStrings[i].style.display = "block";
    }
  });
}
