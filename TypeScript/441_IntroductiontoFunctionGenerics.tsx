////////////////
//441. Introduction to Function Generics

function wrapInArray2<TypetoWrap>(value: TypetoWrap): (TypetoWrap)[] {
    return [value];
}

const result3 = wrapInArray2<string>('please');
const result4 = wrapInArray2<number>(10);
