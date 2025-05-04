//442. Multiple Generics Types

function toRecord <TypeOfID> (id: TypeOfID, value:string){
    return{
        id,
        value
    };
}

const result3 = toRecord<number>(123, 'my@email.com')
const return4 = toRecord<string>('ea01', 'your@email.com')

function toRecord2 <TypeOfID, TypeOfValue> (id: TypeOfID, value:TypeOfValue){
    return{
        id,
        value
    };
}

const result5 = toRecord<number, string>(123, 'my@email.com')
const return6 = toRecord<string, number[]>('ea01', 'your@email.com')
