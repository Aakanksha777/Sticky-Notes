//-------------------------Main 3 Containers-----------------------------------------

const appContainer = document.querySelector(".appContainer");
const loginContainer = document.querySelector(".loginContainer");
const signupContainer = document.querySelector(".signupContainer");

//--------------------------Login_form_References------------------------------------

const loginForm = document.querySelectorAll(".login-form");
const emailField = document.querySelector("#email");
const pswdField = document.querySelector("#password");
const pswdText = document.querySelector("#loginPswd");

const submitBtn = document.querySelector("#submitBtn");
const signupBtn1 = document.querySelector("#signupBtn1");

//---------------------------Signup_form_References------------------------------------

const signupForm = document.querySelectorAll(".signup-form");
const signupFname = document.querySelector("#signupFname");
const FnameText = document.querySelector("#firstname-text");

const signupLname = document.querySelector("#signupLname");
const LnameText = document.querySelector("#Lastname-text");

const signupId = document.querySelector("#signupId");
const idText = document.querySelector("#email-text");

const signupPswd = document.querySelector("#signupPswd");
const signupPswdText = document.querySelector("#pswd-text");

const signupCnfrmPswd = document.querySelector("#signupCnfrmPswd");
const cnfrmPswdText = document.querySelector("#cnfrmPswd-text");

const signupBtnM = document.querySelector("#signupBtnM");
const loginBtn = document.querySelector("#loginBtn");


// functions for checking REGEX:---------------------------------------

signupFname.addEventListener("change", (e) => {
    firstValue = e.target.value;
    if (!(/^[A-Z]*$/.test(firstValue))) {
        FnameText.style.display = "block"
    }
})

signupLname.addEventListener("change", (e) => {
    lastValue = e.target.value
    if(!(/^[A-Za-z]+$/.test(lastValue))) {
        LnameText.style.display = "block"
    }
})

signupId.addEventListener("change", (e) => {
    emailValue = e.target.value
    if(!(/@/.test(emailValue))) {
        idText.style.display="block"
    }
})

signupPswd.addEventListener("change", (e) => {
    pswdValue = e.target.value
    // regexPswd = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8}$/ // 1uppercase, 1special character, 
    regexPswd = /^[0-9]*$/
    if(!(regexPswd.test(pswdValue))) {
        signupPswdText.style.display = "block"
    }
})

// function on submit which Re-checks all conditions:-------------------

function registerNewUser() {
    
    let flag = true;

    let Fvalue = signupFname.value;
    if (!(/^[A-Z]*$/.test(Fvalue))) {
        FnameText.style.display = "block"
        flag = false;

    } 

    let Lvalue = signupLname.value;
    if(!(/^[A-Za-z]+$/.test(Lvalue))) {
        LnameText.style.display = "block"
        flag = false;

    } 

    let Evalue = signupId.value;
    if(!(/@/.test(Evalue))) {
        idText.style.display="block"
        flag = false;

    } 

    let Pvalue = signupPswd.value;
    // regexPswd = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8}$/ // 1uppercase, 1special character, 
    regexPswd= /^[0-9]*$/

    if(!(regexPswd.test(Pvalue))) {
        signupPswdText.style.display = "block"
        flag = false;

    }
    
    //creating object for Local storage:-

    const myData = {  
        signupFname : signupFname.value,
        signupLname : signupLname.value,
        signupId : signupId.value, // local storage [Key]
        signupPswd : signupPswd.value,
        notes : [{}, {}]
    }

    const ifUserExist = localStorage.getItem(signupId.value); //get data from local storage
    // console.log("emailAddressValue",emailAddress.value);
    
    if (!ifUserExist && flag) { 
        localStorage.setItem(signupId.value, JSON.stringify(myData)) // if false
        // console.log(JSON.parse(localStorage.getItem(emailAddress.value))); // checking an object
        
    }

    return false;
}


//----------login_form_switched-------------------------

//-------submit_btn---------------------
submitBtn.addEventListener("click", () => {
    
        console.log("form func is running")
    
        const user = JSON.parse(localStorage.getItem(emailField.value)) // localstorage data=object / ref in login is id= email
        console.log("user Data", user);
        console.log("database pswd", user.signupPswd);
        console.log("manually typed", pswdField.value)
    
        if (localStorage.getItem(emailField.value)) { // user email
            if (user.signupPswd === pswdField.value) { // user.pswd = DataBase pswd  & pswd.value = user's entered pswd.
                console.log("open NOtes")
                loginContainer.classList.add("hide")
                appContainer.classList.add("show")
                console.log("checking notes value", appContainer)
                
            } else {
                alert("Password is invalid"),// nested if's else
                pswdText.classList.add("show")
            } 
    
    
        } else (
            alert(" Please Enter Valid email & Password"), // empty email only / pswd only.&& both wrong
            pswdText.classList.add("loginPswd2")
        )
})
    
//---------------signup_btn_func------------
signupBtn1.addEventListener("click", () => {
    console.log("running ")
    signupContainer.classList.remove("hide")
    loginContainer.classList.add("hide")
})

//-----

loginBtn.addEventListener("click", () => {
    console.log("which btn is this")
    loginContainer.classList.add("hide"),
    signupContainer.classList.add("show")

})