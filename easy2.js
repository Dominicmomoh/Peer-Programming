let numbers=[2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
function prime(arr) {
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 ==0 &&arr[i]!=2) {
        return false
    }
     return true  
}
}
console.log(prime(numbers))