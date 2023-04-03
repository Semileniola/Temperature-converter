/*Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method. */

function repeatStringNumTimes(str, num) {
  // repeat after me
  let newStr = '';
  
  // with a 'for' loop
  //   for (i = 0; i < num; i++) {
  //     newStr += str;
  //   }
  
  // with a 'while' loop
  while (num > 0) {
    newStr += str;
    num--;
  }
  return newStr;
}

repeatStringNumTimes("abc", 3);