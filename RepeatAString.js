function repeat(str, num) {
  emptyString = '';
  ret = '';
  if(num < 1){
    return emptyString;
  }
  else{
    for(i = 0; i < num; i++){
      ret += str;
    }
  }
  return ret;
 }