function isVowel(str){
  str.toLowerCase();
  return str.charAt(0) === 'a'|| str.charAt(0) === 'e' || str.charAt(0) === 'i' || str.charAt(0) === 'o' || str.charAt(0) === 'u'
}

function translate(str) {
 pigArray = str.split('');
 index = 0;
  for(i = 0; i < pigArray.length; i++){
    if (isVowel(pigArray[i])){
     index = i;
     console.log('the index has been set at: ' + index);
     break;
    }
   }

  if(index === 0){
    console.log('index is 0');
    pigArray.push('way');
  } else {
    for(var y = index; y > 0; y--){
      console.log('var y is now: ' + y);
      pigArray.push(pigArray.shift());
    }
    pigArray.push('ay');
  }
  finalString = pigArray.join('');
  return finalString;
  }


translate("consonant");