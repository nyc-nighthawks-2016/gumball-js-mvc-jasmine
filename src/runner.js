var gumballMachine = new GumballMachine(),
    view = new View(),
    controller = new Controller();
$(function() {
  controller.setView(view);
  controller.setModel(gumballMachine);
  view.setController(controller);
  controller.init();
});