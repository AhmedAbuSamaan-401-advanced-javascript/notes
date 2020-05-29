'use strict';
const minimist = require('minimist');
const Input = require('../lib/input.js');
jest.mock('minimist');

minimist.mockImplementation(() => {
  return {
    add: 'the adder',
  };
});

describe('INPUT MODULE', () => {
  it('If the commands valid', () => {
    let createNoteObject = new Input();
    expect(createNoteObject.valid()).toBeTruthy();
  });
  it('If the commands invalid', () => {
    let createNoteObject = new Input();
    createNoteObject.action = 'action';
    createNoteObject.payload = 'payload';
    expect(createNoteObject.valid()).toBeFalsy();
  });
});