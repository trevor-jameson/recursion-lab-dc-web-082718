// Code your solution here!

function printString(str) {
    let len = str.length
    console.log(str[len -1])
    if (len > 1) {
        printString(str.slice(0, len -1))
    }
}

function reverseString(str) {
    let len = str.length
    if (len > 1) {
        return reverseString(str.slice(1, len)) + str[0]
    }
    return str
}

function isPalindrome(str) {
    if (str.length > 1) {
        const first = str[0]
        const last = str[str.length - 1]
        if (first === last) {
            isPalindrome(str.slice(1, str.length -1))
        } else {
            return false
        }
    }
    return true
}

function addUpTo(arr, num) {
   // If num greater than zero, recurse, else return first elem
   if (num > 0) {
       return arr[0] + addUpTo(arr.slice(1, arr.length), num - 1)
   }
   return arr[0]
}

function includesNumber(arr, num) {
    if (arr.length > 0) {
        if (arr[0] === num) {
            return true
        } else {
            return includesNumber(arr.slice(1, arr.length), num)
        }
    }
    return false
}

function maxOf(arr, max = 0) {
    if (arr.length > 0) {
        const papi = arr.pop()
        if (papi > max) {
            max = papi
        }
        return arr.length === 0 ? max : maxOf(arr, max)
    }
    return max
}