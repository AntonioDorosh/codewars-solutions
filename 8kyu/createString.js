const createString = (strLength) => Array.from({length: strLength}, (_, idx) => `-${idx + 1}`).join('') + '-';

const result = createString(5)

console.log(result) // -1-2-3-4-5-
