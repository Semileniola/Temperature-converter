/*Return the length of the longest word in the provided sentence.

Your response should be a number.*/

function findLongestWordLength(str) {
   var arr = str.split(' ');

  var max = 0;
  var longest = "";
   

  for (var i = 0; i < arr.length; i++) {
    var valStr = arr[i].length;

    if (valStr > max) {
      max = valStr;
      longest = arr[i]
    }
  }
  return longest;
}

const xx =  findLongestWordLength("The quick brown fox jumped over the lazy dog");
console.log({xx});

