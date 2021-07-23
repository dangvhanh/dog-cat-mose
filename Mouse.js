function Mouse(name) {
    this.name = name
  this.die = true
}
Mouse.prototype.die = function() {
    this.die = false;
}

module.exports = Mouse;