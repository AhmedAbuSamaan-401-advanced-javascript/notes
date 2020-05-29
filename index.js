const Input = require('./lib/input');
const Notes = require('./lib/notes');
let createNoteObject = new Input();
let newNote = new Notes(createNoteObject);
newNote.execute(createNoteObject);