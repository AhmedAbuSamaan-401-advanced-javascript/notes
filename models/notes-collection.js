const NoteDb = require('../models/note-schema.js');

class Note {
  create(obg){
    let item = new NoteDb(obg);
    return  item.save();
  }
  get(category){
    return NoteDb.find(category);
  }
  update(item){

  }
  delete(id){
    return  NoteDb.findOneAndDelete({$id: id});
  }
}

module.exports = new Note();