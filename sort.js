const data = [    { name: "Orange", color: 7, score: 5 },
    { name: "Apple", color: 6, score: 3 },
    { name: "Banana", color: 9, score: 1 },
    { name: "Lime", color: 1, score: 4 },];
function getSortValue(vegetable){return vegetable.color;}
const sortOrder = 'asc'; /*desc*/
data.sort((a,b)=>{
    const valueA = getSortValue(a);
    const valueB = getSortValue(b);
    const reverseOrder = sortOrder === 'asc'?1:-1;
    if(typeof valueA === 'string'){
        return valueA.localeCompare(valueB)*reverseOrder;
    } else{
    return (valueA - valueB)*reverseOrder;
    }
})
