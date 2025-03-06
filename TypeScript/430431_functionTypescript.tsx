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

////////////////////////
//431. Function Types in Props Interfaces

import React from 'react'

interface ColorPickerProps{
    colors: string[];
    handleColrSelect: (color: string)=> void;
}

function ColorPicker({ colors, handleColrSelect}:ColorPickerProps){
    const renderedColors = colors.map(color => {
        return <button key={color} onClick={()=>handleColrSelect(color)}>
            {color}
        </button>
    });

    return <div>
        {renderedColors}
    </div>
}

<ColorPicker 
colors={['red', 'green']}
handleColrSelect={(color)=>console.log(color)}
/>
