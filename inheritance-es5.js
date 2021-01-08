/**
 * A is parent class to be inherited by the child B
 */
function A() {
  this.name = arguments[0];
  this.class = arguments[1];
}

// class A methods

A.prototype.getName = function () {
  return this.name;
};

A.prototype.getClass = function () {
  return this.class;
};

/**
 * B is child class which inherits the parent class A
 */
function B() {
  A.apply(this, arguments); // call the super( by calling the parent constructor with child context and arguments)
  this.childName = `child ${arguments[0]}`;
  this.childClass = `sub ${arguments[1]}`;
}

B.prototype = Object.create(A.prototype); // inherit the parent class functionality by creating a object from parent's prototype
B.prototype.constructor = B; // update the constructor of the inherited object to child or inheriting class

// add methods to the child class

B.prototype.getChildName = function () {
  return this.childName;
};

B.prototype.getChildClass = function () {
  return this.childClass;
};

let b = new B("Sunny", "Xth");

b instanceof B; //true
b instanceof A; // true
