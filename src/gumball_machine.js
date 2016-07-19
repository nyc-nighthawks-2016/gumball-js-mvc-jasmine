function GumballMachine() {
  this.gumballs = [];
}

GumballMachine.prototype.refill = function(num) {
  this.gumballs = Array.apply(null, Array(num)).map(function(num) {
    return new Gumball();
  });
}

GumballMachine.prototype.dispense = function() {
  return this.gumballs.pop();
}