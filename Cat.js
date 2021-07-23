function Cat() {
      this.stomach = [];

}
Cat.prototype.eat = function(mouse) {
    this.stomach.pust(mouse);
}
module.exports = Cat;