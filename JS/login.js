const input = document.querySelector(".login_input");
const button = document.querySelector(".login_button" );
const form = document.querySelector(".login-form");

const validateInput = ({target}) => {
    if (target.value.length  > 2) {
      button.removeAttribute('disabled');
      return;
    } 

    button.setAttribute('disabled', '' );
  } 
  
const handleSubmit = (event) => {
  event.preventDefault();
  localStorage.setItem('Player', input.value);
  window.location = 'PAGES/game.html';
}  

input.addEventListener('input', validateInput); 
form.addEventListener('submit',  handleSubmit);
