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
const confirmPswdText = document.querySelector("#confirmPswd-text");

const signupContainer = document.querySelector(".signupContainer")
const signupHeader = document.querySelector(".signup-header");
const signupForm = document.querySelector(".signup-form");
const signupBtnM = document.querySelector("#signupBtnM"); //signup form pr signup btn which stores the data.
const loginBtn = document.querySelector("#loginBtn"); // signup pr login btn

// login ref--

const loginContainer = document.querySelector(".loginContainer")
const loginHeader = document.querySelector(".loginHeader");
const loginForm = document.querySelector(".login-form");
const submitBtn = document.querySelector("#submitBtn");
const signupBtn1 = document.querySelector("#signupBtn1"); // login form pr signup btn.

const pswd = document.querySelector("#password"); // login pswd input
const appContainer = document.querySelector(".appContainer") // notes


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

signupBtnM.addEventListener("click", () => {



// function registerNewUser() {
    
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

})

// login_form btn switched---------------------->

submitBtn.addEventListener("click", () => {
    console.log("form func is running")

    const user = JSON.parse(localStorage.getItem(email.value)) // localstorage data=object
    console.log("user Data", user);

    if (localStorage.getItem(email.value)) { // user email
        if (user.pswd === pswd.value) { // user.pswd = DataBase pswd  & pswd.value = user's entered pswd.
            console.log("open NOtes")
            loginContainer.classList.add("hide")
            appContainer.classList.add("show")
            console.log("checking notes value", appContainer)
            
        } else {
            alert("Password is invalid"),// nested if's else
            pswdTex.classList.add("show")
        } 


    } else (
        alert(" Please Enter Valid email & Password"), // empty email only / pswd only.&& both wrong
        pswdTex.classList.add("show")
    )
})

signupBtn1.addEventListener("click", () => {
    console.log("running new signup btn", loginContainer)
    loginContainer.classList.add("hide")
    signupContainer.classList.remove("hide")

})

// signup_btn----------

loginBtn.addEventListener("click", () => {
    console.log("ye konsa btn hai", loginBtn)
    signupContainer.classList.add("hide")
    loginContainer.classList.add("show")
})