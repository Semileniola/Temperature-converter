/*Reverse the provided string and return the reversed string.

For example, "hello" should become "olleh".

*/

function reverseString(str) {
 // return str.split("").reverse().join("");..... either use this code or :
    let splitString = str.split("");
    let turnString = splitString.reverse();
    let joinString = turnString.join("");

    return joinString;

}

reverseString("hello");

