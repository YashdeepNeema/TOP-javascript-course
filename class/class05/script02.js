/**
 * JS A definitive Guide
 * 
 * 9.2 Class and Constructor:
 */

//This is a constructor function.
// It does not create or return the objects. It just initializes this.
function Range(from, to){
    this.from = from;
    this.to = to;
}

// Prototype object for the Range's constructor:
Range.prototype = {
    includes(x) {return this.from <= x && x <= this.to}, 
}


// Instantiate new object
let r = new Range(1,4);

console.log(r.includes(2))