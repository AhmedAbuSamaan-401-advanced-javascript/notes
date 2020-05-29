'use strict';
require('dotenv').config();
const mongoose = require('mongoose');
const History=require('./histroy.js');

class Notes {
  constructor(obg){
  }
  execute (obg) {
    let regExAdd = /^add$|^a$/ig;
    if(obg){
      if (regExAdd.test(obg.action)) {
        return  this.add(obg);
      }
  }}

  async add(obg) {
    if(obg){
      if (obg.payload) {
        let insertNote = {
          id: Math.ceil(Math.random() * 100),
          note: obg.payload,
        };
        console.log('Insert text :', insertNote.note);
      }
    }
  }

}


module.exports = Notes;