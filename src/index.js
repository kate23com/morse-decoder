const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let reEMorse = Object.fromEntries(Object.entries(MORSE_TABLE).map(([key, value]) => [key.split('.').join('10').split('-').join('11'), value]));
    let newObj = {}
    let values = Object.values(reEMorse);
    let keys = Object.keys(reEMorse).map(item => item = '0'.repeat(10 - item.length) + item).forEach((key, v) => newObj[key] = values[v]);
    newObj['**********'] = ' ';

    return expr.match(/.{1,10}/g).map(item => item = newObj[item]).join('');
}

module.exports = {
    decode
}