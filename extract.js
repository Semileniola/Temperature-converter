const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite'
  }
};  //this ia a code


//to extract residence you'll use:
const residence = vampire.residence; 
console.log(residence); // Prints 'Transylvania' 

//this is a simpler way of solving it
const { residence } = vampire; 
console.log(residence); // Prints 'Transylvania'

//or to extract 'day' you'll use this other method if you are extreacting a property from a sub object
const { day } = vampire.preferences; 
console.log(day); // Prints 'stay inside'