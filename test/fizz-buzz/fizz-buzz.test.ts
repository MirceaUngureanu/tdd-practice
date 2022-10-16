import {fizzBuzz} from "./fizz-buzz";

describe('FizzBuzz', () => {
    test('When I FizzBuzz 1, I get back a string representing it', () => {
        const result = fizzBuzz(1)
        expect(result).toEqual('1')
    })
    test('When I FizzBuzz 2, I get back 2', () => {
        const result = fizzBuzz(2)
        expect(result).toEqual('2')
    })
    it('should return 4 when I FizzBuzz 4', function () {
        const result = fizzBuzz(4)
        expect(result).toEqual('4')
    });
    it('should return "fizz" when I FizzBuzz 3', function () {
        const result = fizzBuzz(3)
        expect(result).toEqual('fizz')
    });
    it('should return "fizz" when I FizzBuzz 6', function () {
        const result = fizzBuzz(6)
        expect(result).toEqual('fizz')
    });
    it('should return "fizz" when I FizzBuzz 9', function () {
        const result = fizzBuzz(9)
        expect(result).toEqual('fizz')
    });
    it('should return "buzz" when I FizzBuzz 5', function () {
        const result = fizzBuzz(5)
        expect(result).toEqual('buzz')
    });
    it('should return "buzz" when I FizzBuzz 10', function () {
        const result = fizzBuzz(10)
        expect(result).toEqual('buzz')
    });
    it('should return "fizzbuzz" when I FizzBuzz 15', function () {
        const result = fizzBuzz(15)
        expect(result).toEqual('fizzbuzz')
    });
})