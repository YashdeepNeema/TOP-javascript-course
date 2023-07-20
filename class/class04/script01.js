/**
 * MDN Public Instance Method:
 */


// Super class
class BaseClass{
    msg = "hello world!!";
    basePublicMethod() {return this.msg;}
}

// sub class extends to super class:
// sub class accesses the method defined in super class 
class SubClass extends BaseClass{
    subPublicMethod() {return super.basePublicMethod();}
}

// Instentiate the sub class:
// this instance of sub class will inherit the methods defined in super class
const instance = new SubClass();
console.log(instance.subPublicMethod())
