function titleCase(str) {
  str = str.toLowerCase();
  var words = str.split(" ");
  for(var i = 0; i < words.length; i++){
  words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1,words[i].length);
  }
  var Title = words.join(" ");
  return Title;
}
