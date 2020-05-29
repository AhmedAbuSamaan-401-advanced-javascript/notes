'use strict';
require('dotenv').config();
const input = require('./lib/input.js');
const notes = require('./lib/notes.js');
const mongoose = require('mongoose');

let creatObjectNote = new input();
let newNote = new notes(creatObjectNote);
newNote.execute(creatObjectNote);
newNote.add(creatObjectNote);

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  // options.valid => T | F
  options.valid() ? http.fetch(options).then(mongoose.disconnect) : help();
  
  function help() {
    console.log(`
    api USAGE: api -m <method> -u <url> -b <body>
    -m - HTTP Method (get | post | put |patch | delete)
    -u - URL (leading :port presumes localhost)
    -b - BODY to send for or put/patch
         Enclosed in single quotes
         JSON must be valid
    `);
    process.exit();
  }
  