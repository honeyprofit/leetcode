///////////////////////////
// 430. Function TypeScript

interface Car {
    model: string;
    year: number;
    setYear: (year: number) => void;
    setModel: (model: string) => void;
    getDescription: () => string;
}

const mustang: Car = {
    model: 'Mustang',
    year: 2015,
    setYear(nextYear: number){
        this.year = nextYear;
    },
    setModel(nextModel: string){
        this.model = nextModel;
    },
    getDescription(){
        return `Year: ${this.year}, Model: ${this.model}`;
    }
}

mustang.setModel('Audi')
mustang.getDescription()
