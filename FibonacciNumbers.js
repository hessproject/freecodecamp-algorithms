function isOdd(num){
  if(num%2!==0){
    return true;
  } else {
    return false;
  }
}

function sumFibs(num) {
  arr = [];
  arr[0] = 0;
  arr[1] = 1;
  
  while (arr[arr.length-1]<=num){
    count = arr.length-1;
    arr.push(arr[count]+arr[count-1]);
  }
  
  oddArray = arr.filter(isOdd);
  sum = oddArray.reduce(function(a,b){
    return a+b;
  });
  return sum;
}

sumFibs(5);