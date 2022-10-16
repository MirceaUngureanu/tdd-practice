export function leapYear(n: number) {
    if (n % 400 === 0) return true
    if (n % 4 === 0 && n % 100 !== 0) return true
    return false
}