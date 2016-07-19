function View() {
  this.controller = null;
}

View.prototype.setController = function(controller) {
  this.controller = controller;
}

View.prototype.render = function() {
  $('body').html(
    '<h1>I am a Gumball Machine</h1>' +
    '<button>Insert Coin</button>' +
    '<div id="theGumball"></div>'
  );
}

View.prototype.attachListeners = function() {
  $('button').click(function() {
    var gumball = this.controller.getGumball();
    this.displayGumball(gumball);
  }.bind(this));
}

View.prototype.displayGumball = function(gumball) {
  $("#theGumball").text(gumball.toString());
}

View.prototype.init = function() {
  this.render();
  this.attachListeners();
}