function countByX(x, n) {
    if (x < 0 || n < 0) {
        console.log('pick positive numbers')
    } else {
        let array = []
        for (let i = 1; i <= n; i++) {
            array.push(i * x)
        }
        return array
    }

}
