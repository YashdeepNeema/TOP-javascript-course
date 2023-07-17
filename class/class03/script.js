/**
 * Inheritance
 */


//Declaring an Animal class:
class Animal{
    constructor(name){
        this.name = name;
    }

    speak(){
        console.log(`${this.name} makes a noise!`)
    }
}

//Declaring a class named Dog which inherits from Animal class:
class Dog extends Animal{
    constructor(name){
        // to call the super class's constructor and to pass in the name parameter to that:
        super(name);
    }
    speak1(){
        console.log(`${this.name} barks!!`)
    }
}

const dog1 = new Dog('tommy');

// dog1 instance inherits speak() method from Animal class
// whereas speak1() method is defined for Dog class..
dog1.speak();
dog1.speak1();