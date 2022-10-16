export function fibonacci(n: number) {
    let n1 = 0, n2 = 1, c = n;

    for (let i = 2; i <=n; i++) {
        c = n1 + n2
        n1 = n2
        n2 = c
    }

    return c
}