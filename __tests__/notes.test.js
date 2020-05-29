'use strict';
require('@code-fellows/supergoose');

const Input = require('../lib/input.js');
const Notes = require('../lib/notes.js');
const minimist = require('minimist');
jest.mock('minimist');

minimist.mockImplementation(() => {
  return {
    add: 'the adder',
    category:'math',
  };
});

jest.spyOn(global.console, 'log');

describe('NOTE MODULE', () => {
  it('ITs Null , no command given', () => {
    let newNote = new Notes();
    newNote.execute();
    expect(console.log).not.toHaveBeenCalled();
  });
  it('When execute , and the commends are valid', () => {
    let createNoteObject = new Input();
    let newNote = new Notes(createNoteObject);
    newNote.execute(createNoteObject);
    expect(console.log).toHaveBeenCalled();
  });
  
  it('create a new object and store it in the database', () => {
    let newNote = {
      text: 'brother',
      category : 'family',
    };
    return Note.create(newNote).then(item=>{
      Object.keys(newNote).forEach(key=>{
        expect(newNote[key]).toEqual(item[key]);
      });
    });});

  it('get , will search on category', () => {
    let newNote = {
      text: 'sister',
      category : 'family',
    };
    return Note.create(newNote).then(record=>{
      return Note.get({category:record.category}).then(item=>{
        Object.keys(newNote).forEach((key,index)=>{
          expect(newNote[key]).toEqual(item[index][key]);
        });});});
  });
});