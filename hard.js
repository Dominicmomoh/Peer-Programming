let isMatchingBrackets = function (str) {
    let brac = [];
    let fun = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(' || str[i] === '{' || str[i] === '[' ) {
            brac.push(str[i]);
        }
        else {
            let last = brac.pop();
            if (str[i] !== fun[last]) {return false};
        }
    }
        if (brac.length !== 0) {return false};
    return true;
}
console.log(isMatchingBrackets("(){}"));
console.log(isMatchingBrackets("({(()))}}"));  



