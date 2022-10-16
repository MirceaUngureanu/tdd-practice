export class StatsCalculator {
    count(numbers: number[]): number {
        return numbers.length
    }

    average(numbers: number[]): number {
        const count = this.count(numbers);
        const total = numbers.reduce((acc, n: number) => acc+n, 0)
        const result = total / count
        return parseFloat(result.toFixed(6))
    }

    min(numbers: number[]): number {
        return Math.min(...numbers)
    }

    max(numbers: number[]): number {
        return Math.max(...numbers)
    }
}