////////////////
//440_Life Without Generics

function wrapInArray(value: string | number): (string | number)[] {
    return [value];
}
function wrapNumberInArray(value: number): (number)[] {
    return [value];
}

const result = wrapInArray('hello world');
const result2 = wrapNumberInArray(10)
