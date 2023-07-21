/***
 *JS A definitive Guide:
 *  9.1 Class and Prototype:
 * 
 * Factory function thing;
 */

// This is a factory function that retruns a new "range" object:
function range(from, to){
    let r = Object.create(range.methods);
    r.from = from;
    r.to = to;

    return r;
}

// This is the prototype object which defines methods inherited by all "range" objects::
range.methods = {
    includes(x) {return this.from <=x && x <= this.to;},
}