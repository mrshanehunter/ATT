

const decreaseBy3 = document.getElementById('enterBtn');

let tokenTotal = 25;
const ppc = -3;

decreaseBy3.addEventListener('click', function(){
    let tokensRemain = tokenTotal - ppc;
    tokenTotal = tokensRemain;
    return tokenTotal;
})

console.log(tokenTotal);