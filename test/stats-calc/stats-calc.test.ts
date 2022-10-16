import {StatsCalculator} from "./stats-calc";

describe('Stats calculator', function () {
    const numbers = [6, 9, 15, -2, 92, 11];

    test('When I call count with 6 numbers I received the count of 6', function () {
        const statsCalculator = new StatsCalculator();

        const result = statsCalculator.count(numbers);

        expect(result).toEqual(6);
    });

    test('When I call count with 1 numbers I received the count of 1', function () {
        const statsCalculator = new StatsCalculator();

        const result = statsCalculator.count([22]);

        expect(result).toEqual(1);
    });

    test('When I call average with [5] I receive 5', () => {
        const statsCalculator = new StatsCalculator();

        const result = statsCalculator.average([5])

        expect(result).toEqual(5)
    })

    test('When I call average with [5, 3] I receive 4', () => {
        const statsCalculator = new StatsCalculator();

        const result = statsCalculator.average([5, 3])

        expect(result).toEqual(4)
    })

    test('When I call average with [6, 9, 15, -2, 92, 11] I receive 21.833333', () => {
        const statsCalculator = new StatsCalculator();

        const result = statsCalculator.average(numbers)

        expect(result).toEqual(21.833333)
    })

    test('When I min [1,2] I receive 1', () => {
        const statsCalculator = new StatsCalculator();

        const result = statsCalculator.min([1,2])

        expect(result).toEqual(1)
    })

    test('When I min [1,2] I receive 1', () => {
        const statsCalculator = new StatsCalculator();

        const result = statsCalculator.min([1,2])

        expect(result).toEqual(1)
    })

    test('When I min [6, 9, 15, -2, 92, 11] I receive -2', () => {
        const statsCalculator = new StatsCalculator();

        const result = statsCalculator.min(numbers)

        expect(result).toEqual(-2)
    })

    test('When I max [1,2] I receive 2', () => {
        const statsCalculator = new StatsCalculator();

        const result = statsCalculator.max([1,2])

        expect(result).toEqual(2)
    })

    test('When I max [3,4,5] I receive 5', () => {
        const statsCalculator = new StatsCalculator();

        const result = statsCalculator.max([3,4,5])

        expect(result).toEqual(5)
    })

    test('When I min [6, 9, 15, -2, 92, 11] I receive 92', () => {
        const statsCalculator = new StatsCalculator();

        const result = statsCalculator.max(numbers)

        expect(result).toEqual(92)
    })
});