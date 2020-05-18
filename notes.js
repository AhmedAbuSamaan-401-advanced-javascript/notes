'use strict';
const input = require('./lib/input.js');
const notes = require('./lib/notes.js');

let creatObjectNote = new input();
let newNote = new notes(creatObjectNote);
newNote.execute(creatObjectNote);
newNote.add(creatObjectNote);

