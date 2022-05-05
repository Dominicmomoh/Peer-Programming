 const vowels=['a', 'e', 'i', 'o', 'u']

function vowelChecker (x) {
    if(vowels.includes(x.toLowerCase())){
        console.log(`${x} :is a vowel`)
    }
else if(x.toLowerCase()=== 'y'){
    console.log(`${x} : is sometime a vowel`)
} else console.log(`${x} :is not a vowel`)
}
vowelChecker('p')
vowelChecker('a')
vowelChecker('y')
vowelChecker('h')
vowelChecker('j')
vowelChecker('d')