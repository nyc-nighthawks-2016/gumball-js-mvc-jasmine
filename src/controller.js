function Controller() {
  this.gumballMachine = null;
  this.view = null;
}

Controller.prototype.setView = function(view) {
  this.view = view;
}

Controller.prototype.setModel = function(gumballMachine) {
  this.gumballMachine = gumballMachine;
}

Controller.prototype.init = function() {
  var numGumballs = 5;
  this.gumballMachine.refill(numGumballs);
  this.view.init();
}

Controller.prototype.getGumball = function() {
  if(this.gumballMachine.gumballs.length) {
    return this.gumballMachine.dispense();
  }
  return -1;
}