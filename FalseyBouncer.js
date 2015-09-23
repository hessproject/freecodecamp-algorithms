function isNotFalsey(value){
  return (value !== false && value !== 0 && value !== null && value !== '');
}

function bouncer(arr) {
  arrFiltered = arr.filter(isNotFalsey);
  return arrFiltered;
}