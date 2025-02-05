function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

const string = makeid(1000000)

const startCharAt = performance.now()
for(let i = 0; i < string.length; i++) string.charAt(i)
console.log(performance.now() - startCharAt)

const startParentehe = performance.now()
for(let i = 0; i < string.length; i++) string[i]
console.log(performance.now() - startParentehe)