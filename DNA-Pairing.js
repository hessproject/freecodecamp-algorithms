function pair(str) {
	toPairArray = str.split('');
	pairedArray = [];
 	console.log('The array to be paired contains: ' + toPairArray);
 	for (i = 0; i < toPairArray.length; i++){
 		tempArray = [];
 		console.log("Pairing pairArray index #: " + i);
 		switch(toPairArray[i]){
 			case "A": 
 				tempArray = ['A','T'];
 				pairedArray.push(tempArray);
 				break;
 			case "T":
 				tempArray = ['T', 'A'];
 				pairedArray.push(tempArray);
 				break;
 			case "C":
 				tempArray = ['C','G'];
 				pairedArray.push(tempArray);
 				break;
 			case "G":
 				tempArray = ['G', 'C'];
 				pairedArray.push(tempArray);
 				break;
 		}
 	}
 return pairedArray;
}


pair("GCG");
