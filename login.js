const email = document.querySelector("#email"); 
const pswd = document.querySelector("#password");
// console.log(email);
// console.log(pswd);

const emailTex = document.querySelector("#loginFnametext");
const pswdTex = document.querySelector("#loginPswd");
// console.log(emailTex);
// console.log(pswdTex);

const logForm =document.querySelector("#loginForm")
console.log("check login ref", logForm);

const btn = document.querySelector("#btn");
// console.log(btn);

const appContainer = document.querySelector(".appContainer")
console.log("check sticky ref",appContainer);

const loginContainer = document.querySelector(".login_container")
// console.log(" Log in form" ,loginContainer);

const signupContainer = document.querySelector(".signupContainer");
console.log("signup div" ,signupContainer);


// email.addEventListener("change", () => {
//     console.log('email field is running')
//     const emailVal = email.value
//     if (/@/.test(emailVal)) {
//         alert("valid email"),
//         console.log("if is true")
//     } else {
//         emailTex.style.display = "block"
//         console.log("if is false")
//     }
// })

// pswd.addEventListener("change", () => {
//     console.log('password is running')
//     const pswdVal = pswd.value
//     if(/^[0-9]*$/.test(pswdVal)) {
//         alert("valid password")
//     } else {
//         pswdTex.style.display = "block"
//         console.log('else condition')
//     }
// })

btn.addEventListener("click", () => {
    console.log("form func is running")

    const user = JSON.parse(localStorage.getItem(email.value)) // localstorage data=object
    console.log("user Data", user);

    if (localStorage.getItem(email.value)) { // user email
        if (user.pswd === pswd.value) { // user.pswd = DataBase pswd  & pswd.value = user's entered pswd.
            console.log("open NOtes")
            loginContainer.classList.add("hide")
            appContainer.classList.add("show")
            console.log("checking notes value", appContainer)
            
        } else {alert("Password is invalid")} // nested if's else


    } else (
        loginContainer.classList.add("hide"),
        signupContainer.classList.add("show") // email && pswd both wrong.
        // alert(" Invalid email")

    )
})



















// const recheckValidation = true;


// email.addEventListener("change", () => {
//     console.log('email field is running')
//     const emailVal = email.value
//     if (/@/.test(emailVal)) {
//         alert(" log valid email"),
//         console.log("if is true")
//     } else {
//         emailTex.style.display = "block",
//         alert("log invalid email"),
//         console.log("if is false")
//         recheckValidation = false;
//     }
// })

// pswd.addEventListener("change", () => {
//     console.log('password is running')
//     const pswdVal = pswd.value
//     if(/^[0-9]*$/.test(pswdVal)) {
//         alert("log valid password")
//     } else {
//         pswdTex.style.display = "block",
//         alert("log invalid password")
//         console.log('else condition')
//         recheckValidation = false;

//     }
// })