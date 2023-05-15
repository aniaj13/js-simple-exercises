function mixMax(array) {
    let min = Math.min(...array)
    let max = Math.max(...array)
    return [min, max]
}