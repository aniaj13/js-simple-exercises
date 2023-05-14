function findNextSquare(square) {
    if (Math.sqrt(square) % 1 !== 0) {
        return -1
    } else {
        let firstNum = Math.sqrt(square)
        let nextNum = firstNum + 1
        return Math.pow(nextNum, 2)
    }
}