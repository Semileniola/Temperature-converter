const choices = ['rock', 'paper', 'scissors']

function playGame (userChoice) {
  try {
    userChoice = userChoice.toLowerCase()
    let resultMessage = `You chose ${userChoice}.`
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    resultMessage += `\nComputer chose ${computerChoice}.`
    // console.log(`Computer chose ${computerChoice}.`)
    if (userChoice === computerChoice) {
      resultMessage += "\nIt's a tie!"
    } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      resultMessage += `\nYou win!`
    } else {
      resultMessage += '\nComputer wins!'
    }
    return resultMessage;
  } catch (e) {
    console.log('EREOE:', e)
  }
}

console.log('Welcome to Rock, Paper, Scissors!')

const result = playGame('PAPER')

console.log(result)
