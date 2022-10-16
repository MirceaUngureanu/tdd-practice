import {fibonacci} from "./fibonacci";
// f 0 1 1 2 3 5
// s 0 1 2 3 4
describe('Fibonacci', () => {
    it('should return 0 when I fibonacci 0', function () {
        const result = fibonacci(0)
        expect(result).toEqual(0)
    });
    it('should return 1 when I fibonacci 1', function () {
        const result = fibonacci(1)
        expect(result).toEqual(1)
    });
    it('should return 2 when I fibonacci 1', function () {
        const result = fibonacci(2)
        expect(result).toEqual(1)
    });
    it('should return 3 when I fibonacci 2', function () {
        const result = fibonacci(3)
        expect(result).toEqual(2)
    });
})