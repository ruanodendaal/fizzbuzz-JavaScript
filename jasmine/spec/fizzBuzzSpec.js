describe("Fizzbuzz", function() {

  var fizzbuzz

  beforeEach(function(){
    fizzbuzz = new Fizzbuzz();
  });

  describe('knows when number is', function(){
    it("divisible by 3", function() {
      expect(fizzbuzz.play(3)).toEqual('Fizz');
    });

    it("divisible by 5", function() {
      expect(fizzbuzz.play(5)).toEqual('Buzz');
    });

    it("divisible by 3 & 5", function() {
      expect(fizzbuzz.play(15)).toEqual('Fizzbuzz');
    });
  });

  describe('knows when number is NOT', function(){
    it("divisible by 3", function() {
      expect(fizzbuzz.play(2)).toEqual(2);
    });

    it("divisible by 5", function() {
      expect(fizzbuzz.play(1)).toEqual(1);
    });

    it("divisible by 3 & 5", function() {
      expect(fizzbuzz.play(11)).toEqual(11);
    });
  });

});
