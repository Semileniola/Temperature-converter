/*Imagine you’re a big-wig programmer for a social media platform! You have been tasked with building a prototype for a mutual followers program*/

// Write your code below
const bobsFollowers = ['Tola', 'Ngozi', 'Taiwo', 'Kenny'];
const tinasFollowers = ['Kenny', 'Tola', 'Clara'];
const mutualFollowers = [];

for(let i = 0; i < bobsFollowers.length; i++){
  for(let j = 0; j < tinasFollowers.length; j++){
    if (bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
  
}