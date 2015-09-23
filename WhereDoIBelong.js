function where(arr, num) {
  arr.sort();
  for(i=0; i<arr.length;i++){
    if (arr[i] >= num){
      return i;
    }
  }
}