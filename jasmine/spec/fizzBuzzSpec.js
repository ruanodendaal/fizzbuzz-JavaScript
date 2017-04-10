describe("Fizzbuzz", function() {
  // var fizzbuzz

  beforeEach(function(){
    fizzbuzz = new Fizzbuzz();
  });

  it("returns fizz when number is 3", function() {
    expect(fizzbuzz.play(3)).toEqual('Fizz');
  });
});
