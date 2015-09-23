function truncate(str, num) {
  if(str.length > num){
    str = str.substr(0,num-3) + "...";
  }
  return str;
}