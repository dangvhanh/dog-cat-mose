var Mouse = require('./Mouse')
var Dog = require('./Dog')
var Cat = require('./Cat')

var mouse = new Mouse('jery')
var cat = new Cat();
var dog = new Dog();
try {
    cat.eat(dog);
} catch {
    console.log('Error while cat eating a dog')
}

console.log(cat);