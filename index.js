function isPalindrome(word) {
  let charactersInWord = word.split('');
 
  const reverseCharsInWord=charactersInWord.reverse();
 
  const ReveredWord=reverseCharsInWord.join('')
 
  if(word.toLowerCase() === ReveredWord.toLowerCase()){
   return true
  }
  else{
  return false
  }
 }
 
 
 /* 
   Add your pseudocode here
 */
 
 /*
   Add written explanation of your solution here
   first we split our words to reverse them then put the word(chars) together again and check if main word is same as reversed
 */
 
 // You can run `node index.js` to view these console logs
 if (require.main === module) {
   // add your own custom tests in here
   console.log("Expecting: true");
   console.log("=>", isPalindrome("racecar"));
 
   console.log("");
 
   console.log("Expecting: false");
   console.log("=>", isPalindrome("robot"));
 }
 
 module.exports = isPalindrome;