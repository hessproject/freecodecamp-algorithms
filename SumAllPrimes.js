var primeArray = [];

function isPrime(num){
  if(num < 2){
    return false;
  }
  for(var i = 2; i < num; i++){
    if(num % i === 0){
      return false;
    }
  }
  return true;
}

function sumPrimes(num){
  if(num === 2){
    return 2;
  } else{
    for(var i = 2; i <= num; i++){
      if(isPrime(i)){
        console.log(i + "is prime")
        primeArray.push(i);
      }
    }
  }
  console.log("prime array contains:"+ primeArray);
  return primeArray.reduce(function(a, b){
    return a+b;
  });
}