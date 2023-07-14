function Hero(name, level){
    this.name = name;
    this.level = level;
}
Hero.prototype.greet = function() {
    return`${this.name} says hello!`;
}

let hero1 = new Hero('bablu', 1)

console.log(hero1.greet());