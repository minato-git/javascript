/**
 * A is parent class to be inherited by the child B
 */
function A(...args) {
  const [name, _class] = args;
  this.name = name;
  this.class = _class;
}

// class A methods

A.prototype.getName = function getName() {
  return this.name;
};

A.prototype.getClass = function getClass() {
  return this.class;
};

/**
 * B is child class which inherits the parent class A
 */
function B(...args) {
  const [name, _class] = Array.from(args);
  A.apply(this, args); // call the super( by calling the parent constructor with child context and arguments)
  this.childName = `child ${name}`;
  this.childClass = `sub ${_class}`;
}

B.prototype = Object.create(A.prototype); // inherit the parent class functionality by creating a object from parent's prototype
B.prototype.constructor = B; // update the constructor of the inherited object to child or inheriting class

// add methods to the child class

B.prototype.getChildName = function getChildName() {
  return this.childName;
};

B.prototype.getChildClass = function getChildClass() {
  return this.childClass;
};

const b = new B('Sunny', 'Xth');

b instanceof B; // true
b instanceof A; // true
