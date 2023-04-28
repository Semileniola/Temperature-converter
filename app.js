const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:

const handleSuccess = (yay) => {
  console.log(yay)
}

const handleFailure = (nay) => {
  console.log(nay)
}

checkInventory(order).then(handleSuccess, handleFailure);






