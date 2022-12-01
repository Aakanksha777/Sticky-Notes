// const email = document.querySelector("#email"); 
// const pswd = document.querySelector("#password");
// const emailTex = document.querySelector("#loginFnametext");
// const pswdTex = document.querySelector(".loginPswd"); // show Error text.
// const logForm =document.querySelector("#loginForm")
// const btn = document.querySelector("#btn");
// const appContainer = document.querySelector(".appContainer")
// const loginContainer = document.querySelector(".login_container")
// const signupContainer = document.querySelector(".signupContainer");
// const signBtn = document.querySelector("#loginBtn")
// console.log(signBtn)

// btn.addEventListener("click", () => {
//     console.log("form func is running")

//     const user = JSON.parse(localStorage.getItem(email.value)) // localstorage data=object
//     console.log("user Data", user);

//     if (localStorage.getItem(email.value)) { // user email
//         if (user.pswd === pswd.value) { // user.pswd = DataBase pswd  & pswd.value = user's entered pswd.
//             console.log("open NOtes")
//             loginContainer.classList.add("hide")
//             appContainer.classList.add("show")
//             console.log("checking notes value", appContainer)
            
//         } else {
//             alert("Password is invalid"),// nested if's else
//             pswdTex.classList.add("show")
//         } 


//     } else (
//         alert(" Please Enter Valid email & Password"), // empty email only / pswd only.&& both wrong
//         pswdTex.classList.add("show")
//     )
// })


// signBtn.addEventListener("click", () => {
//     loginContainer.classList.add("hide"),
//     signupContainer.classList.add("show")

// })