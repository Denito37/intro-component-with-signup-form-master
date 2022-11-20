//inputs
const fName = document.getElementById("firstName");
const lName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.getElementById("claim");
//error-icons
const fError = document.getElementById("first-error");
const lError = document.getElementById("last-error");
const eError = document.getElementById("email-error");
const pError = document.getElementById("password-error");
//errorMSG
const eMsg = document.getElementById('errorMsg');

fError.classList.add('hidden');
lError.classList.add('hidden');
eError.classList.add('hidden');
pError.classList.add('hidden');
button.addEventListener('click', error);

//FUNCTIONS
function error(e){
    if(email.validity.typeMismatch){
        eError.classList.remove('hidden');
        eMsg.innerHTML = "Invalid email";
    }
    else if(email.value===""){
        eError.classList.remove('hidden');
        e.preventDefault();
        eMsg.innerHTML = "Enter an email";
    }
}
