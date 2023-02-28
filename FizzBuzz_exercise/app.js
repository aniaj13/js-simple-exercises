function printNumbers(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            console.log('FizzBuzz')
        } else if (i % 3 === 0) {
            console.log('Fizz')
        } else if (i % 5 === 0) {
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
}

// other version

const printNum = (n) => {
    if (n < 1 || !Number.isInteger(n)) {
        console.error('Input must be a number greater than 0')
    } else {
        for (let i = 1; i <= n; i++) {
            let output = '';
            if (i % 3 === 0) {
                output += 'Fizz'
            }
            if (i % 5 === 0) {
                output += 'Buzz'
            }
            console.log(output || i)
        }
    }
}

