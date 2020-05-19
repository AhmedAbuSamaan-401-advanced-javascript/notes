const minimist = require('minimist');

const Reg = /^add$|^a$/ig;
class Input {
  constructor() {
    let argv = minimist(process.argv.slice(2));
    let method;
    let text ;
    if(Object.keys(argv).length > 1){
      method = Object.keys(argv)[1];
      text = argv[method];
    }else{
      method = Object.keys(argv)[0];
      text = argv[method];
    }
    if(argv){

      if (Reg.test(method) && !argv.d) {
        if (typeof (text) === 'string') {
          this.action = method;
          this.payload = text;
        } else {
          console.log('Please insert a text');
        }
      } else {
        console.log('Only [--add] or [--a/-a] working to add a message , Try again !');
    
      }
    }
  }

  valid(){
    const vaildAdd =  /^add$|^a$/ig;
    if(vaildAdd.test(this.action) && typeof (this.payload) === 'string'){
      return true;
    }else{
      return false;
    }
  }
}
module.exports = Input;