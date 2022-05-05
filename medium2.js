const str1 = 'Madonna of the Rocks';
const str2 = 'So dark the con of man';
const checkAnagram = (a, b) => {
    for (let i = 0; i < a.length; i++){
        console.log(i)
        if (a[i] !== b[i]){
            console.log(i)
            return false
        }
    }
    return true
    
}
const check = (str) => {
return str
.toLowerCase() 
        .replace(/\s+/g, "") 
        .split("") 
        .sort(); 
}
let newStr = check(str1)
let newStr2 = check(str2)

console.log(checkAnagram(newStr, newStr2))

