//A simple class, constructor and methods


class Rectangle{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    //getter
    get area(){
        return this.calcArea();
    }

    //method
    calcArea() {
        return this.height*this.width;
    }
}


const mySquare = new Rectangle(20, 30);

console.log(mySquare.area)