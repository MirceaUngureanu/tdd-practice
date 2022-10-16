import {leapYear} from "./leap-year";

describe('Leap year', () => {
    it('should return false if I leapYear 1', function () {
        const result = leapYear(1)
        expect(result).toEqual(false)
    });
    it('should return true if I leapYear 4', function () {
        const result = leapYear(4)
        expect(result).toEqual(true)
    });
    it('should return true if I leapYear 8', function () {
        const result = leapYear(8)
        expect(result).toEqual(true)
    });
    it('should return true if I leapYear 12', function () {
        const result = leapYear(12)
        expect(result).toEqual(true)
    });
    it('should return false if I leapYear 2001', function () {
        const result = leapYear(2001)
        expect(result).toEqual(false)
    });
    it('should return true if I leapYear 1996', function () {
        const result = leapYear(1996)
        expect(result).toEqual(true)
    });
    it('should return false if I leapYear 1900', function () {
        const result = leapYear(1900)
        expect(result).toEqual(false)
    });
    it('should return true if I leapYear 2000', function () {
        const result = leapYear(2000)
        expect(result).toEqual(true)
    });
    it('should return true if I leapYear 400', function () {
        const result = leapYear(400)
        expect(result).toEqual(true)
    });
    it('should return true if I leapYear 800', function () {
        const result = leapYear(800)
        expect(result).toEqual(true)
    });
    it('should return true if I leapYear 1200', function () {
        const result = leapYear(1200)
        expect(result).toEqual(true)
    });
})