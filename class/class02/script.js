// Static methods and fields:
/**
 * The static keyword defines a static method of field for a class.
 * Static properties are defined on the class itself insted of each instance.
 * 
 * Static methods are used to create utility fuction for an application
 * 
 * Static fields are useful for caches, fixed-configuration, or any other data that don't need to be
 * replicated across instances.
 * 
 */

class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    //static field:
    static displayName = "Point";

    //static method:
    // to find the distance between two points p1 and p2
    static distance(p1,p2){
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;

        return Math.hypot(dx, dy);
    }
}

const point_01 = new Point(5,5);
const point_02 = new Point(10,10);

console.log(Point.displayName);

console.log(Point.distance(point_01, point_02))

// to samajhne ki baat ye hai ki "static" properties class ke liye hi defined hai 
// uske instances ke liye nahi...
// console.log(point_01.displayName) --> undefined  :-)


/* Field Declarations: 
* Field declarations can either be (1) public class field or (2) private class field
*  Public class fields can be accessed from both inside and outside of the class instances
*  Private class fields can be accessed within the class itself.
*   Private class fields are declared with a prefixed # symbol:::
*/

class MyClass{
    publicField = "I am a public field";
    #privateField = "I am a private field";

    myMethod() {
        console.log("public: "+ this.publicField);
        console.log("private: "+ this.#privateField);
    }
}

const myInstance = new MyClass();

console.log(myInstance.publicField);
myInstance.myMethod();
// console.log(myInstance.#privateField); it will throw a syntax errror:

/* It's an error to reference private fields from outside of the class; 
they can only be read or written within the class body. 
By defining things that are not visible outside of the class, you ensure that 
your classes' users can't depend on internals, which may change from version to version. */