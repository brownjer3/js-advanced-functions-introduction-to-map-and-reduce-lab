function mapToNegativize(array) {
    let newArr = []
    array.forEach(element => {
        newArr.push(-element)
    })
    return newArr
}

function mapToNoChange(array) {
    return array
}

function mapToDouble(array) {
    return array.map(num => {
        return num * 2
    })
}

function mapToSquare(array) {
    return array.map(num => num*num)
}

function reduceToTotal(array, start=0) {
    return array.reduce(((total, amount) => total+amount), start)
}

function reduceToAllTrue(array) {
    return array.reduce((accumulator, val) => {
        return accumulator = (val === false) ? false : true;
    })
}

function reduceToAnyTrue(array) {
    return array.reduce((accumulator, val) => accumulator = (val === true))
}