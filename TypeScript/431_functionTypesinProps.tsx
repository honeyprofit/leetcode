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
