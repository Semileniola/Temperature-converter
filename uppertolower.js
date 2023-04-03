function titleCase(str) {
  let arr = str.split(' ');
  let newarr = '';
  
  for(let i = 0; i < arr.length; i++){
    let word = arr[i].toLowerCase();
    if(i > 0 && (word === 'the' || word === 'of')){
      newarr += word + ' ';
    } else {
      newarr += word.charAt(0).toUpperCase() + word.slice(1) + ' ';
    }
  }
  return newarr.trim();
}

let run = titleCase("I'm a little tea pot"); // Output: "I'm a Little Tea Pot"

console.log(run);