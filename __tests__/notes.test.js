'use strict';
require('@code-fellows/supergoose');
const Input = require('../lib/input.js');
const Notes = require('../lib/notes.js');
const Note = require('../models/notes-collection.js');
const minimist = require('minimist');
jest.mock('minimist');

minimist.mockImplementation(() => {
  return {
    add: 'helloooo',
    category:'greetings',
  };
});
jest.spyOn(global.console, 'log');

describe('Note Module', () => {
  it('Nothing is logged to the console if there was no command given', () => {
    let newNote = new Notes();
    newNote.execute();
    expect(console.log).not.toHaveBeenCalled();
  });
  it('logs notes when execute() with an object with note, If the command (add) and data (the note) were both valid', () => {
    let createNoteObject = new Input();
    let newNote = new Notes(createNoteObject);
    newNote.execute(createNoteObject);
    expect(console.log).toHaveBeenCalled();
  });
  
  
  it('create() => will create a new object and store it in the database', () => {
    let newNote = {
      text: 'Ahmad',
      category : 'student',
    };
    return Note.create(newNote).then(item=>{
      Object.keys(newNote).forEach(key=>{
        expect(newNote[key]).toEqual(item[key]);
      });
    });
  
  });

  it('get() => will find an object with spacific category', () => {
    let newNote = {
      text: 'Ahmad',
      category : 'student',
    };
    return Note.create(newNote).then(reccord=>{
      return Note.get({category:reccord.category}).then(item=>{
        Object.keys(newNote).forEach((key,idx)=>{
          expect(newNote[key]).toEqual(item[idx][key]);
        });
      });
    });
  });
});
