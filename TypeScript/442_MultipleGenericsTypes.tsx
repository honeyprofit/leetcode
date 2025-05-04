//442. Multiple Generics Types

function toRecord <TypeOfID> (id: TypeOfID, value:string){
    return{
        id,
        value
    };
}

const result5 = toRecord<number>(123, 'my@email.com')
const return6 = toRecord<string>('ea01', 'your@email.com')
