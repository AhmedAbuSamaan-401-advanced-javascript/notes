'use strict';
require('dotenv').config();
const mongoose = require('mongoose');
const Note = require('./models/note-schema.js');
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const mongo = async (noteItem) => {
  const note = new Note(noteItem);
  await note.save();
  console.log('Note Created', note);
  const oneNote = await Note.findById(note.id);
  console.log('One Note', oneNote);
  const allNote = await Note.find({});
  console.log('All Note', allNote);
  mongoose.disconnect();
};

const noteItem = {
  text: 'first Note',
  category: 'document'
};

mongo(noteItem);
