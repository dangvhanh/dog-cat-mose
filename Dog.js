function Dog(name) {
    this.stomach = [];
    this.name = name;

};
Dog.prototype.eat = function(cat) {
    this.stomach.push(cat);
};
Dog.prototype.hi = function() {
    console.log('I am' + this.name );
};

module.exports = Dog;