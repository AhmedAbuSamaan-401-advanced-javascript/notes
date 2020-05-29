const minimist = require('minimist');
class Input {
  constructor() {
    let regAdd = /^add$|^a$/ig;
    let regCategory = /^category$/ig;
    let regList = /^list$/ig;
    let regExDelete = /^delete$/ig;
    let argv = minimist(process.argv.slice(2));
    let addMethod;
    let addText;
    let categoryMethod;
    let textCategory;
    let deleteListMethod;
    let textListDelete;
    let argvSize = Object.keys(argv).length;

    if (Object.keys(argv).length === 3) {
      addMethod = Object.keys(argv)[1];
      categoryMethod = Object.keys(argv)[2];
      addText = argv[addMethod];
      textCategory = argv[categoryMethod];
    } else if (Object.keys(argv).length === 2) {
      deleteListMethod = Object.keys(argv)[1];
      textListDelete = argv[deleteListMethod];
    }
    else if (Object.keys(argv).length === 1) {
      addMethod = Object.keys(argv)[0];
      categoryMethod = Object.keys(argv)[1];
      addText = argv[addMethod];
      this.action = addMethod;
      this.category = categoryMethod;
      this.payload = addText;

    }

    let testAddCommand = regAdd.test(addMethod) && regCategory.test(categoryMethod) && !(argvSize > 3);
    let testListCommand = regList.test(deleteListMethod) && !(argvSize > 2);
    let testDeleteCommand = regExDelete.test(deleteListMethod) && !(argvSize > 2);
    if (testAddCommand) {
      if (typeof (addText) === 'string' && typeof (textCategory) === 'string') {
        this.action = addMethod;
        this.payload = addText;
        this.category = textCategory;
      } else {
        console.log('your text should be between " "');
      }
    }
    else if (testListCommand) {
      this.action = deleteListMethod;
      this.payload = textListDelete;
    }
    else if (testDeleteCommand) {
      if (typeof (textListDelete) === 'string') {
        this.action = deleteListMethod;
        this.payload = textListDelete;
      } else {
        console.log('you should type an id');
      }
    }
    else {
      console.log(`~~~ you have to use [--add with a note and --category for the category] or [--a/-a] ~~~
~~~ you have to use --list to spawn all the notes or you can do -- list with a category ~~~
 ~~~ you have to use --delete with an id to delete a note ~~~`);
    }
  }
  valid() {
    let testAdd = /^add$|^a$/ig;
    if (testAdd.test(this.action) && typeof (this.payload) === 'string') {
      return true;
    } else {
      return false;
    }
  }
}
module.exports = Input;