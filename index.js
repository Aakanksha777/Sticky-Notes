//-------------------------Main 3 Containers-----------------------------------------

const appContainer = document.querySelector(".appContainer");
const loginContainer = document.querySelector(".loginContainer");
const signupContainer = document.querySelector(".signupContainer");
const auth = document.querySelector(".authentication");
const regxPatterns = {
    password:/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
    firstName:  /^[A-Za-z]+$/,
    lastName:  /^[A-Za-z]+$/,
    emailId: /@/
}

//--------------------------Login_form_References------------------------------------

const loginForm = document.querySelector("#loginForm");
const switchToSignUp = document.querySelector(".switchToSignUp")
const switchToLogin = document.querySelector(".switchToLogin")
//---------------------------Signup_form_References------------------------------------

const signupForm = document.querySelector(".signup-form");
const signUpPassword = signupForm.querySelector("input[name=password]")
const singUpInputFields = signupForm.querySelectorAll("input")

//---------------SwitchingDisplay_func------------// 
const switchingDisplay = (hideThisBlock,showThisBlock) => {
    hideThisBlock.classList.add("hide")
    showThisBlock.classList.remove("hide")
} 
switchToSignUp.addEventListener("click", () => {
    switchingDisplay(loginContainer, signupContainer)
})
switchToLogin.addEventListener("click", () => {
    switchingDisplay(signupContainer,loginContainer)
})

singUpInputFields.forEach((input)=>{
    input.addEventListener("change", (e) =>{
        input.name !== "confirmPassword" ?
         validationCheck(e,regxPatterns[input.name])
         :  matchPassword(e)
    })
})
const validationCheck = (e,regx) => {
    const element =  e.target
    element.nextElementSibling.style.display = "none"
    if(!(regx.test(element.value))){
        element.nextElementSibling.style.display = "block"
    }
}
const matchPassword = (e) => {
    const element =  e.target
    element.nextElementSibling.style.display = "none"
    if(signUpPassword.value !== element.value){
        element.nextElementSibling.style.display = "block"
    }
}
//-------------------SignUp form submit-------------------// DONE

function registerNewUser(obj) {
    const firstName = obj.firstName
    const lastName = obj.lastName
    const emailId = obj.emailId
    const password = obj.password
    const repeatPassword = obj.confirmPassword
    // Variables defining RegExp
    if (!(regxPatterns.firstName.test(firstName.value))) {
        firstName.nextElementSibling.style.display = "block"
        return false
    }
    if (!(regxPatterns.lastName.test(lastName.value))) {
        lastName.nextElementSibling.style.display = "block"
        return false
    }
    if (!(regxPatterns.emailId.test(emailId.value))) {
        emailId.nextElementSibling.style.display = "block"
        return false
    }
    if (!(regxPatterns.password.test(password.value))) {
        password.nextElementSibling.style.display = "block"
        return false
    }
    if(password.value !== repeatPassword.value){
        repeatPassword.nextElementSibling.style.display = "block"
        return false
    }
    
    //creating object for Local storage:-
    const userData = {
        firstName: firstName.value,
        lastName: lastName.value,
        emailId: emailId.value, // local storage [Key]
        password: password.value,
        notes: []
    }

    const ifUserExist = localStorage.getItem(emailId.value); //get data from local storage

    if (!ifUserExist) {
        localStorage.setItem(emailId.value, JSON.stringify(userData)) // if false
    }
    return false;
}

//----------login_form_submit-------------------// DONE
loginForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const loginForm = e.target
    const email = loginForm.email
    const password = loginForm.password.value
    const isUserExist = localStorage.getItem(email.value)
    if (isUserExist) { 
        const userData = JSON.parse(isUserExist)
        if (userData.password === password.value) { // user.pswd = DataBase pswd  & pswd.value = user's entered pswd.
            switchingDisplay(auth,appContainer)
        } else {
            password.nextElementSibling.style.display = "block"
        }
    } else {
            email.nextElementSibling.style.display = "block"
    }
})


const notesContainer = document.getElementById("app");   // create variable=notesContainer by Id("app").
const addNoteButton = notesContainer.querySelector(".add-button");  // create var=addNoteButton by class of button("add-button").

getNotes().forEach((notes) => { // for every single notes exist in LS grab it one by one

    const noteElement = createNoteElement(notes.id, notes.content);
    notesContainer.insertBefore(noteElement, addNoteButton);
    console.log(noteElement);
});


addNoteButton.addEventListener("click", () => addNote());


//functions 1; // retrieve all existing notes from local storage.
function getNotes() {
    return JSON.parse(localStorage.getItem("stickynotes-notes") || "[]"); //stickynotes?, is notes a class?
}

//functions 2; take array of notes.
function saveNotes(notes) {
    localStorage.setItem("stickynotes-notes", JSON.stringify(notes));
    console.log(notes);
}

//functions 3; build new note 
function createNoteElement(id, content) {  // id? content?
    const element = document.createElement("textarea");
    // <textarea></textarea>

    // createElement creates an element node., element is yet to exist

    element.classList.add("notes");
    // <textarea class="notes"></textarea>

    element.value = content;
    // <textarea class="notes">content</textarea>
    element.placeholder = "write from here";

    element.addEventListener("change", () => {  //change= when the value of input is changed.
        updateNote(id, element.value); // update note`s id and content.
    });

    element.addEventListener("dblclick", () => {  // on double click , delete the notes.
        const doDelete = confirm("Are you sure?");

        if (doDelete) {
            deleteNote(id, element);
        }
    });
    return element;
}

//functions 4; adding new notes not only to html , but also save it to local storage.
function addNote() {
    const notes = getNotes();  // variable notes is equal to getNotes().
    const noteObject = {
        id: Math.floor(Math.random() * 100000),
        content: ""
    };

    const noteElement = createNoteElement(noteObject.id, noteObject.content);
    notesContainer.insertBefore(noteElement, addNoteButton);

    notes.push(noteObject);
    saveNotes(notes);
}


//functions 5;
function updateNote(id, newContent) {
    const notes = getNotes();
    const targetNote = notes.filter((notes) => notes.id != id);

    targetNote.content = newContent;
    saveNotes(notes);
}

//functions 6;
function deleteNote(id, element) {
    const notes = getNotes().filter((note) => note.id != id);

    saveNotes(notes);
    notesContainer.removeChild(element);
}
