const loginForm = document.querySelector('.login-form');

loginForm.addEventListener("submit", handleSubmit);
function handleSubmit(event){
  event.preventDefault();
  const elements = event.currentTarget.elements;
  console. log(elements); 

  const formData = {
    email: elements.email.value,
    password: elements.password.value,
  };
  
  if (emailValue === '' || passwordValue === '') {
    alert('All form fields must be filled in');
    return;
  }
  
  event.currentTarget.reset();}