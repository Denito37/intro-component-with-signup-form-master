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
const fMsg = document.getElementById('fnErrorMsg');
const lMsg = document.getElementById('lnErrorMsg');
const eMsg = document.getElementById('errorMsg');
const pMsg = document.getElementById('pwErrorMsg');

fError.classList.add('hidden');
lError.classList.add('hidden');
eError.classList.add('hidden');
pError.classList.add('hidden');
button.addEventListener('click', error);
button.addEventListener('click', emptyVal);

//FUNCTIONS
function error(e){
    if(email.validity.typeMismatch){
        eError.classList.remove('hidden');
        eMsg.innerHTML = "Invalid email";
    }
}
function emptyVal(e){
    if(email.value===""){
        eError.classList.remove('hidden');
        e.preventDefault();
        eMsg.innerHTML = "Enter an email";
    }
    if(fName.value===""){
        fError.classList.remove('hidden');
        e.preventDefault();
        fMsg.innerHTML = "Enter a name";
    }
    if(lName.value===""){
        lError.classList.remove('hidden');
        e.preventDefault();
        lMsg.innerHTML = "Enter a name";
    }
    if(password.value ===""){
        pError.classList.remove('hidden');
        e.preventDefault();
        pMsg.innerHTML = "Enter a password";
    }
}
