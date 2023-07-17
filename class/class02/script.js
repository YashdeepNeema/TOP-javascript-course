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