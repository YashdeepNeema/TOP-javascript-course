/**
 * Example 9.4 from JS A definitive Guide:
 */

class Complex{
    #r = 0;
    #i = 0;

    constructor(real, imaginary){
        this.r = real;
        this.i = imaginary;
    }

    plus(that){
        return new Complex(this.r + that.r, this.i + that.i);
    }
    times(that){
        return new Complex(this.r * that.r - this.i * that.i, this.r*that.i + this.i*that.r);
    }

    static sum(c,d) {return c.plus(d);}
    static product(c,d){return c.times(d);}

    get real(){return this.r;}
    get imaginary(){return this.i}
    get magnitude(){return Math.hypot(this.r, this.i);}

    equls(that){
        return that instanceof Complex && this.r === that.r && this.i === that.i;
    }
}

/******************************************************************************************************* */

let c = new Complex(2, 3);
let d = new Complex(c.i, c.r);

console.log(c.plus(d));
console.log(c.magnitude)