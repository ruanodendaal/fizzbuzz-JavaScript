describe("Fizzbuzz", function() {
  var fizzbuzz

  beforeEach(function(){
    fizzbuzz = new Fizzbuzz();
  });

  it("returns fizz when divisible by 3", function() {
    expect(fizzbuzz.play(3)).toEqual('Fizz');
  });

  it("returns buzz when divisible by 5", function() {
    expect(fizzbuzz.play(5)).toEqual('Buzz');
  });

  it("return fizzbuzz when divisible by 3 & 5", function() {
    expect(fizzbuzz.play(15)).toEqual('Fizzbuzz')
  });
});
