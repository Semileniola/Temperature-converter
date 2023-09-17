let letter = 'Olatunde Owokoiran';

const reverseWord = (letter) => {
    let newLetter = letter.split('');
    let newCreatedLetter = '';
    for(let i in newLetter) {
        let item = newLetter[i];
        newCreatedLetter = item + newCreatedLetter
    }
    
    outputResponse(newCreatedLetter, letter, (res) => {
        console.log('res', res)
    })
}

const outputResponse = (params, secParams, callback) => {
    console.log('newCreatedLetter', params)
    callback(secParams)
}

reverseWord(letter)
