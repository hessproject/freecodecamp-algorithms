function factorialize(num) {
  if(num <= 1){
    return 1;
  }
  else{
  var numFactorial = num*factorialize(num - 1)
  return numFactorial;
  }
}