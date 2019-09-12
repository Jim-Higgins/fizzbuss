const fizzBuzz = require("../index")
const chai = require("chai")
const expect = chai.expect

describe('fizzbuzz tests', () => {
    it('imput is a number', () => {
        expect(fizzBuzz(1)).to.be.a('number')
        expect(fizzBuzz("hi im a string")).to.equal("error")     
    });

   it('is diversable by 3', () => {
       expect(fizzBuzz(3)).to.equal("Fizz")
        
    });
    it('is diversable by 5', () => {
        expect(fizzBuzz(5)).to.equal("Buzz")
         
     });
     it('if not diversable 3 or 5 return number', () => {
         expect(fizzBuzz(1)).to.equal(1)
     });
     it('is diversabnle by 3 and 5 return fizzbuzz', () => {
         expect(fizzBuzz(15)).to.equal("FizzBuzz")
     });
});

