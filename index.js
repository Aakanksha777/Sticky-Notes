//-------------------------Main 3 Containers-----------------------------------------

const appContainer = document.querySelector(".appContainer");
const loginContainer = document.querySelector(".loginContainer");
const signupContainer = document.querySelector(".signupContainer");

//--------------------------Login_form_References------------------------------------

const loginForm = document.querySelector("#loginForm");
const submitBtn = document.querySelector("#submitBtn");
const signupBtn1 = document.querySelector("#signupBtn1");

//---------------------------Signup_form_References------------------------------------

const signupForm = document.querySelectorAll(".signup-form");

// functions for checking REGEX:---------------------------------------

signupFname.addEventListener("change", (e) => {
    firstValue = e.target.value;
    if (!(/^[A-Z]*$/.test(firstValue))) {
        FnameText.style.display = "block"
    }
})

signupLname.addEventListener("change", (e) => {
    lastValue = e.target.value
    if (!(/^[A-Za-z]+$/.test(lastValue))) {
        LnameText.style.display = "block"
    }
})

signupId.addEventListener("change", (e) => {
    emailValue = e.target.value
    if (!(/@/.test(emailValue))) {
        idText.style.display = "block"
    }
})

signupPswd.addEventListener("change", (e) => {
    pswdValue = e.target.value
    // regexPswd = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8}$/ // 1uppercase, 1special character, 
    regexPswd = /^[0-9]*$/
    if (!(regexPswd.test(pswdValue))) {
        signupPswdText.style.display = "block"
    }
})
//-------------------SignUp form submit-------------------// DONE

function registerNewUser(obj) {
    const firstName = obj.firstName
    const lastName = obj.lastName
    const emailId = obj.emailId
    const password = obj.newPswd
    const repeatPassword = obj.confirmPswd
    // Variables defining RegExp
    const passRegx = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8}$/ // 1 uppercase, 1 special character, 
    const nameRegx = /^[A-Za-z]+$/
    const emailRegx = /@/
    if (!(nameRegx.test(firstName.value))) {
        firstName.nextElementSibling.style.display = "block"
        return
    }
    if (!(nameRegx.test(lastName.value))) {
        lastName.nextElementSibling.style.display = "block"
        return
    }
    if (!(emailRegx.test(emailId.value))) {
        emailId.nextElementSibling.style.display = "block"
        return
    }
    if (!(passRegx.test(password.value))) {
        password.nextElementSibling.style.display = "block"
        return
    }
    if(password.value !== repeatPassword.value){
        repeatPassword.nextElementSibling.style.display = "block"
        return
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
    debugger
    const loginForm = e.target
    const emailValue = loginForm.email.value
    const passwordValue = loginForm.password.value
    const isUserExist = localStorage.getItem(emailValue)
    if (isUserExist) { 
        const userData = JSON.parse(isUserExist)
        if (userData.pswd === passwordValue) { // user.pswd = DataBase pswd  & pswd.value = user's entered pswd.
            console.log("open NOtes")
            // loginContainer.classList.add("hide")
            // appContainer.classList.add("show")
            console.log("checking notes value", appContainer)

        } else {
            alert("Password is invalid")// nested if's else
                // pswdTex.classList.add("show")
        }
    } else {
        alert(" Please Enter Valid email & Password") // empty email only / pswd only.&& both wrong
        // pswdTex.classList.add("show")
    }
})

//---------------SwitchingDisplay_func------------// 
// signupBtn1.addEventListener("click", () => {
//     signupContainer.classList.remove("hide")
//     loginContainer.classList.add("hide")
// })
// loginBtn.addEventListener("click", () => {
//     console.log("ye konsa btn hai", loginBtn)
//     signupContainer.classList.add("hide")
//     loginContainer.classList.add("show")
// })




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
