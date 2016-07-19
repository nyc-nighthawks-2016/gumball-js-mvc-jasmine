describe('Gumball Machine', function() {
  var gumballMachine;
  beforeEach(function() {
    gumballMachine = new GumballMachine();
  });

  it('should refill the machine with gumballs', function() {
    var numGumballs = 5;
    gumballMachine.refill(numGumballs);
    expect(gumballMachine.gumballs.length).toEqual(numGumballs);
  });

  it('should dispense a gumball', function() {
    var numGumballs = 5;
    gumballMachine.refill(numGumballs);
    var gumballsLength = gumballMachine.gumballs.length;
    var expectedGumball = gumballMachine.gumballs[gumballsLength-1];
    var gumball = gumballMachine.dispense();
    expect(gumball).toBe(expectedGumball);
  });

  it('should have one less gumball', function() {
    var numGumballs = 5;
    gumballMachine.refill(numGumballs);
    var gumballsLength = gumballMachine.gumballs.length;
    gumballMachine.dispense();
    expect(gumballMachine.gumballs.length).toBe(gumballsLength-1);
  });
});