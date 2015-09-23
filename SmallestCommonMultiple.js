function smallestCommons(arr) {
  var difference = 0;
  var lowestNumber = 0;
  var maxCount = 1000000;
  count = 0;
  rangeArray = [];
  if (arr[0] > arr[1]){
    difference = arr[0]-arr[1];
    lowestNumber = arr[1];
    console.log("Arr[0] is larger, difference is now: " + difference);
    console.log("lowestNumber is now: " + lowestNumber);
  } else{
    difference = arr[1]-arr[0];
    lowestNumber = arr[0];
    console.log("Arr[1] is larger, difference is now: " + difference);
    console.log("lowestNumber is now: " + lowestNumber);
  }
    for (i = 0; i <= difference; i ++){
    rangeArray.push(lowestNumber + i);
    console.log("rangeArray contains the numbers: " + rangeArray);
    }
    
//possible solution to Smallest Common Multiple. So far code only puts the
//range into an array, need to think of way to check each number
//less than maxCount against each element as being %===0


smallestCommons([1,5]);
