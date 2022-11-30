//Taking Refernces:------------------------------------------

const signupFname = document.querySelector("#signupFname");
const signupLname = document.querySelector("#signupLname");
const signupId = document.querySelector("#signupId");
const signupPswd = document.querySelector("#signupPswd"); 
const signupCnfrmPswd = document.querySelector("#signupCnfrmPswds");

const firstnameText = document.querySelector("#firstname-text");
const lastnameText = document.querySelector("#lastname-text");
const emailText = document.querySelector("#email-text");
const pswdText = document.querySelector("#pswd-text");
const confirmPswdText = document.querySelector("#onfirmPswd-text");

const loginForm = document.querySelector(".login-form");
const loginHeader = document.querySelector(".login-header");
const loginBtn = document.querySelector("#loginBtn");
const signupForm = document.querySelector(".signup-form");
const signupHeader = document.querySelector(".signup-header");
const signupBtn = document.querySelector("#signupBtn");
//------------------------------------------------------------------------------------------------------------------------


// functions for checking REGEX:---------------------------------------

signupFname.addEventListener("change", (e) => {
    firstValue = e.target.value;
    if (!(/^[A-Z]*$/.test(firstValue))) {
        firstnameText.style.display = "block"
    }
})

signupLname.addEventListener("change", (e) => {
    lastValue = e.target.value
    if(!(/^[A-Za-z]+$/.test(lastValue))) {
        lastnameText.style.display = "block"
    }
})

signupId.addEventListener("change", (e) => {
    emailValue = e.target.value
    if(!(/@/.test(emailValue))) {
        emailText.style.display="block"
    }
})

signupPswd.addEventListener("change", (e) => {
    pswdValue = e.target.value
    // regexPswd = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8}$/ // 1uppercase, 1special character, 
    regexPswd = /^[0-9]*$/
    if(!(regexPswd.test(pswdValue))) {
        pswdText.style.display = "block"
    }
})

// function on submit which Re-checks all conditions:-------------------

function registerNewUser() {
    
    let flag = true;

    let Fvalue = signupFname.value;
    if (!(/^[A-Z]*$/.test(Fvalue))) {
        firstnameText.style.display = "block"
        flag = false;

    } 

    let Lvalue = signupLname.value;
    if(!(/^[A-Za-z]+$/.test(Lvalue))) {
        lastnameText.style.display = "block"
        flag = false;

    } 

    let Evalue = signupId.value;
    if(!(/@/.test(Evalue))) {
        emailText.style.display="block"
        flag = false;

    } 

    let Pvalue = signupPswd.value;
    // regexPswd = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8}$/ // 1uppercase, 1special character, 
    regexPswd= /^[0-9]*$/

    if(!(regexPswd.test(Pvalue))) {
        pswdText.style.display = "block"
        flag = false;

    }
    
    const userFame = document.querySelector("#signupFname"); // taking referenes 
    const userLname = document.querySelector("#signupLname");
    const emailAddress = document.querySelector("#signupId");
    const pswd = document.querySelector("#signupPswd");

    const myData = {  // creating object
        userFame : userFame.value,
        userLname : userLname.value,
        emailAddress : emailAddress.value,
        pswd : pswd.value,
        notes : [{}, {}]
    }

    const ifUserExist = localStorage.getItem(emailAddress.value); //get data from local storage
    // console.log("emailAddressValue",emailAddress.value);
    
    if (!ifUserExist && flag) { 
        localStorage.setItem(emailAddress.value, JSON.stringify(myData)) // if false
        // console.log(JSON.parse(localStorage.getItem(emailAddress.value))); // checking an object
        
    }

    return false;
}

// form switched---------------------->
loginBtn.addEventListener("click", () => {

    loginForm.classList.add("hide");
    loginHeader.classList.add("hide");

    signupForm.classList.remove("hide");
    signupHeader.classList.remove("hide");

})

signupBtn.addEventListener("click", () => {

    signupForm.classList.add("hide");
    signupHeader.classList.add("hide");

    loginForm.classList.remove("hide");
    loginHeader.classList.remove("hide");

})
