var Person = function(firstAndLast) {
  var fullName= firstAndLast;
  var firstName = firstAndLast.split(' ')[0];
  var lastName = firstAndLast.split(' ')[1];

  this.setFirstName = function(first){
    firstName = first;
  };
  this.setLastName = function(last){
    lastName = last;
  };
  this.setFullName = function(firstAndLast){
    fullName = firstAndLast;
  };
  this.getFirstName = function(){
    return firstName;
  };
  this.getLastName = function(){
    return lastName;
  };
  this.getFullName = function(){
    return fullName;
  };
};

bob = new Person('Bob Ross');