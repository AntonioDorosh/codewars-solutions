const shortenSpeech = (str) => {
    const vowels = 'aeiou';
    const arr = str.split(' ');
    let shorten = arr.map((x) => {
        if (x.length > 3) {
            for (let i = 3; i < x.length; i++) {
                if (vowels.includes(x[i])) {
                    x = x.substring(0, i)
                    x = x + '.'
                    return x
                }
            }
        }
        return x
    });

    return shorten.join(' ')
};

console.log(shortenSpeech("Hello, do you want a coffee ? "), "Hell. do you want a coff. ? ")
console.log(shortenSpeech("Did you bring your computer ?"), "Did you bring your comp. ?")
console.log(shortenSpeech("I've just finished my first kata"), "I'v. just fin. my first kat.")