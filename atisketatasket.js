//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num) {
  if(num >= str.length){
    //str = str
  }
  else{
    str = str.substr(0,num) + '...';
  }
console.log(str)
return str
}