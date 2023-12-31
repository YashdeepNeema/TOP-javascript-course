/**
 * JS A definitive Guide
 * 
 *  9.3 Classes with the "class" Keyword:
 */

class Range{
    constructor(from, to){
        this.from = from;
        this.to = to;
    }

    includes(x) {return this.from <= x && x <= this.to;}

    *[Symbol.iterator](){
        for(let x = Math.ceil(this.from); x <= this.to; x++) yield x;
    }

    //Retrun a string representation of the range:
    toString() {return `(${this.from}...${this.to})`;}
}

let r = new Range(1, 4);

console.log(r.includes(3))