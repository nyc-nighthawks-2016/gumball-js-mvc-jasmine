describe('Gumball', function() {
  var gumball;
  beforeEach(function() {
    gumball = new Gumball();
  });

  it('should print its information', function() {
    expect(gumball.toString()).toEqual('blue blueberry gumball');
  });
});