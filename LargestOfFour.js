function largestOfFour(arr) {
  largeNumberArray = [];
  for(var i in arr){
    subArray = arr[i];
    largeNumberArray.push(Math.max.apply(null, subArray));
  }
  return largeNumberArray;
}