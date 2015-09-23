function binaryAgent(str) {
  newArr = [];
  arr = str.split(' ');
  for(i=0; i < arr.length; i++){
    newArr.push(String.fromCharCode(arr[i]));
  }
  newStr = newArr.join('');
  return newStr;
}