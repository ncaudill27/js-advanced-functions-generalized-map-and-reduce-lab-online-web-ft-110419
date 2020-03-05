function map(arr, fn) {
    return arr.map(fn)
}

function reduce(arr, fn, arg = 0) {
    return arg ? arr.reduce(fn, arg) : arr.reduce(fn)
}