class Notes {
  constructor(obg){

  }
  execute (obg) {
    if(obg){
      let vaildAdd =  /^add$|^a$/ig;
      if (vaildAdd.test(obg.action)) {
        this.add(obg);
      }
    }
  }
  add(obg) {
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