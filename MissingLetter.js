function fearNotLetter(str) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var lowerCaseString = str.toLowerCase();
  var index = 0;
  for (i=0; i<alphabet.length; i++){
    if (lowerCaseString.charCodeAt(0) === alphabet.charCodeAt(i)){
      index = i;
      console.log("index is equal to:" + index);
    }
  }
  for (y=0; y<lowerCaseString.length; y++){
    if (lowerCaseString.charCodeAt(y)===alphabet.charCodeAt(index)){
      index++;
    } else if(lowerCaseString.charCodeAt(y)!==alphabet.charCodeAt(index)){
      missingLetter = String.fromCharCode(alphabet.charCodeAt(index));
      return missingLetter;
    } else{
      return undefined;
    }
  }
}