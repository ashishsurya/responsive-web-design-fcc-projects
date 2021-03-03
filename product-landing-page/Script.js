const form = document.forms[0];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const { email } = e.target.elements;
  console.log(email.value);
  email.value = null;
});
