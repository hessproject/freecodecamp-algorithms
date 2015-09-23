var longestWord = 0;
function findLongestWord(str) {
  var lengthTest = str.split(" ");
  var longestWord = 0;
  for(i = 0; i < lengthTest.length; i++){
    if(lengthTest[i].length > longestWord){
      longestWord = lengthTest[i].length;
    }
  }
    return longestWord;
}