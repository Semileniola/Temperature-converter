/*https://www.codecademy.com/courses/learn-javascript-iterators/projects/mini-linter */

let story = `Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It's really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.`;
let storyCleaned = `Last weekend, I took the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It's really an adventure from beginning to end! It is a 48 mile loop and it took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a really long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you cross back into New York! At this point, you are very close to the end.`;
let storyWords = story.split(' ');
console.log({storyWords});

let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = "freaking";
//let count = 0;

//My code is below :)
const wordChecker = (wordsToClean) => {
    const cleanupMap = {
        [unnecessaryWord]: '',
        [misspelledWord]: "beautiful",
        [badWord]: "really"
    }
    console.log({cleanupMap});

    // 1. Use a map;
    const cleanedWords = wordsToClean.map((word) => {
        const cleanupMapKeys = Object.keys(cleanupMap);
        if(cleanupMapKeys.includes(word)){
            return cleanupMap[word];
        }
        return word;
    });
    console.log({cleanedWords});
    return cleanedWords.join(' ');
     let count = 0;

     for (let i = 0; i <= storyWords.length; i++) {
       storyLine = storyWords[i];
        if (storyWords === unnecessaryWord){
            storyWords[i] = ''; 
        }
         if (storyLine === misspelledWord){
             let modifiedWords = storyLine.map(word => {
                return word === misspelledWord ? newWord : word;
               }).join(' ');

               console.log(modifiedWords)
              
         } else {
            return 'Error'
        }

    //     if (storyLine === badWord){
    //         let replacement = storyLine.map(word => {
    //             return word === badWord ? newWord2 : word;
    //           }).join(' ');

    //           console.log(replacement)
              
    //     } else {
    //         return 'Error'
    //     }
}

const wordCheckerUsingForloop = (wordsToClean) => {
    const cleanedWords = [];

    for(let i = 0; i < wordsToClean.length; i++) {
        let word = wordsToClean[i];
        let newWord = word;
        if(word === unnecessaryWord){
            continue;
        } else if (word === misspelledWord){
            newWord = 'beautiful';
        } else if (word === badWord){
            newWord = 'really';
        }
        cleanedWords.push(newWord);
    }
    return cleanedWords.join(' ');

}

let mine = wordCheckerUsingForloop(storyWords);

console.log({mine}, mine === storyCleaned);
