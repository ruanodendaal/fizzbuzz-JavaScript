var Fizzbuzz = function () {
}

Fizzbuzz.prototype.play = function(number){
  if (this._isDivisibleBy(15, number)) {
    return 'Fizzbuzz';
  } else if (this._isDivisibleBy(3, number)) {
    return 'Fizz';
  } else if (this._isDivisibleBy(5, number)) {
    return 'Buzz';
  } else {
    return number;
  }
}

Fizzbuzz.prototype._isDivisibleBy = function(divisor, number) {
  return number % divisor === 0;
}

fizzbuzz = new Fizzbuzz();
var limit = 100;
for (var i = 1; i < limit; i++) {
  fizzBuzz = fizzbuzz.play(i);
  console.log(fizzBuzz);
}
