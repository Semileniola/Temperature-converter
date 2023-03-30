let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(obj) {
    // Only change code below this line
    //return ('Alan' in users && 'Jeff' in users && 'Sara' in users && 'Ryan' in users )? true : false ...or use :
    if (obj.hasOwnProperty('Alan') == true && obj.hasOwnProperty('Sarah') == true && obj.hasOwnProperty('Ryan') == true && obj.hasOwnProperty('Jeff') == true){
    
      return true;
  } else {
      return false;
  }
    // Only change code above this line
  }
  
  console.log(isEveryoneHere(users));