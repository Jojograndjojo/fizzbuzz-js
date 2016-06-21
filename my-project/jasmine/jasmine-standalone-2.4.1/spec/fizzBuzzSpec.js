describe('FizzBuzz', function(){
  var fizzBuzz;

  beforeEach(function(){
    fizzBuzz = new FizzBuzz();
  });
  describe('multiples of 15', function(){
    it('fizzbuzz for 15', function() {
      expect(fizzBuzz.play(15)).toEqual('FizzBuzz');
    });
  });
  describe('multipls of 5', function(){
    it('buzz for 5', function(){
      expect(fizzBuzz.play(5)).toEqual('Buzz');
    });
  });
  describe('multiples of 3', function(){
    it('fizz for 3', function(){
      expect(fizzBuzz.play(3)).toEqual('Fizz');
    });
  });
  describe('other numbers', function(){
    it('returns number', function(){
      expect(fizzBuzz.play(7)).toEqual(7);
    });
  });
});
