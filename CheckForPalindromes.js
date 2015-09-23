var regex = new RegExp(/[^\w]|_/g);
function palindrome(str) {
  str = str.toLowerCase().replace(regex, '').split('').join('');
  reverseStr = str.toLowerCase().replace(regex,'').split('').reverse().join('');
  if (str === reverseStr){
    return true;
}
  else{
    return false;
  }
}