function Gumball(color, flavor) {
  this.color = color || 'blue' ;
  this.flavor = flavor || 'blueberry';
}

Gumball.prototype.toString = function() {
  return this.color + ' ' + this.flavor + ' gumball';
}