const form = document.querySelector("form.login-form");
const email = document.querySelector("input[name='email']");
const password = document.querySelector("input[name='password']");

form.addEventListener("submit", event => {
  event.preventDefault();
  const userData = event.currentTarget.elements;

  if (email.value.trim() === "" || password.value.trim() === "") {
    alert('All form fields must be filled in');
    return;
  }
  
  const userDataObject = {
    email: email.value.trim(), 
    password: password.value.trim(),
  };

  console.log(userDataObject);
  form.reset();
});
