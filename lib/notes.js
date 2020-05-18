function notes(obg){}

notes.prototype.execute = function(obg){
  if(obg.payload){
    console.log("Insert new note",obg);
  }
}

notes.prototype.add = function(obg){
  if(obg.payload){
    let newNote ={
      id : Math.ceil(Math.random()*100),
      note : obg.payload
    }
    console.log("my text:", newNote);
  }
}

module.exports = notes;