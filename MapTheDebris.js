function orbitalPeriod(arr) {
  var newArray = [];
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  
  arr.forEach(function(a){
     newArray.push({"name": a.name,"orbitalPeriod": Math.round((2*Math.PI)*Math.sqrt((Math.pow(earthRadius+a.avgAlt,3))/GM))});
     }
);

return newArray;
}


orbitalPeriod([{name : "sputkin", avgAlt : 35873.5553}]);