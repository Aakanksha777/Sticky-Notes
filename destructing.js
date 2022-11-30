// const note = {
//     id : 1,
//     title : "my first note",
//     date : "19/11/2022"
// }

//traditional way to create new variable to each object property.
// const id = note.id
// const title = note.title
// const date = note.date


//but with object destructuring :-
// console.log(note.title); //output my first note
// console.log(note); // entire object
// console.log(id); // output- 1
// console.log(note.id); // output- 1


// const {id, title , object} = note;

// assign custome name to the object property:
// const {id : myId, title : myTitle, date : myDate} = note;

// console.log(myId);
// console.log(myTitle);
// console.log(myDate);

//Nested object-- update author in existing object.

// const username = {
//     firstname : 'Aakanksha',
//     lastname : 'malothia',
//     email : "aakankshamalothia@gmail.com",
//     pswd : 123456,
//     note : {
//         authorFname : "nozomi",
//         authorLname : "chan"
//     }
// }

// console.log(username);

//destructuring nested object ;-


// console.log(`${authorLname}`); // same output.


// Access object and nested values
// const {firstname, lastname, email, pswd} = username;
// console.log(username); // same output.

// const {note, note : {authorFname, authorLname} } = username
// console.log(authorLname);

// -------------------------------------------ARRAY DESTRUCTURING -------------------------------------

// allows you to create new variables using an array item as a value.
const myArray = ["rama" ,"shiva" , "hanumana", "vishnu"];

// Arrays in JavaScript are guaranteed to preserve their order
// so in this case the first index will always be a year, & so on
