/*Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead. */

function confirmEnding(str, target) {
  //return str.endsWith(target);...do the cide this way or go through another way :

  if(str.slice(-target.length) == target){
    return true;
  }
  return false
}

let n = confirmEnding("Bastian", "n");

console.log (n);