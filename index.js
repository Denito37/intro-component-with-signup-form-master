const fName = document.getElementsByClassName(".firstName");
const lName = document.getElementsByClassName(".lastName");
const email = document.getElementsByClassName(".email");
const password = document.getElementsByClassName(".password");
const button = document.getElementsByClassName("claim");
const error = document.getElementsByClassName(".error");

button.addEventListener("click", errorMsg);

function errorMsg(){
    if(!fName.checkValidity() || fName.value === ""){
        error.style.visibility = "visible";
    }
    else if(!email.checkValidity() || email.value === ""){
        error.style.visibility = "visible";
    }
    else if(!lName.checkValidity() || email.value === ""){
        error.style.visibility = "visible";
    }
    else if(!password.checkValidity() || email.value === ""){
        error.style.visibility = "visible";
    }

}