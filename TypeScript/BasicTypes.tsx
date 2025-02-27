const hours: number = 10;
const color: string = 'red';
const isRed: boolean = color === 'red';
const age: number = 25;

const colors :string[] = [
    'red', 'green', 'blue'
]
const areColorsRed: boolean[] = [
    true, false, false
]
const ages: number[] = [
    20,30,40
]

//function
function add(a:number,b:number):number{
    return a+b;
}

const sum = add(1,5);

function printColors(colors:string[]){
    console.log(colors)
}
printColors(['asdf','asdf'])

function printAge(age:number){
    console.log(age)
}
printAge(123);
