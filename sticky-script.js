const notesContainer = document.getElementById("app");   // create variable=notesContainer by Id("app").
const addNoteButton = notesContainer.querySelector(".add-button");  // create var=addNoteButton by class of button("add-button").
console.log(notesContainer);
console.log(addNoteButton);


getNotes().forEach((notes) => { // for every single notes exist in LS grab it one by one
    
    const noteElement = createNoteElement(notes.id, notes.content);
    notesContainer.insertBefore(noteElement, addNoteButton);
    console.log(noteElement);
});

  
addNoteButton.addEventListener("click", () => addNote());


//functions 1; // retrieve all existing notes from local storage.
function getNotes () {
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
