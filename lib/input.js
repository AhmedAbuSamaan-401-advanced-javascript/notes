'use strict';
const minimist = require('minimist');

function input() {
  console.log(process.argv);
  let checkMethod = process.argv[2]
  let argv = minimist(process.argv.slice(2));

 let method = Object.keys(argv)[1];
 let text = argv[method];
 let reg = /^add$|^a$/ig

 if(reg.test(method) && (checkMethod === "--add" || checkMethod ==="---a" || checkMethod === "-a")){
   if(typeof(text) === 'string'){
     this.action = method;
     this.payload = text;
   }else{
     console.log('please insert a text !');
   }
 }else {
   console.log('only [--add] or [--a/-a] working to add a text, please try again.');
 }
}

module.exports = input;
