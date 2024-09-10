var convert = function(s, numRows) {
    
    if (numRows === 1) return s;

    let rows = new Array(Math.min(numRows, s.length)).fill("");
    let currRow = 0;
    let goingDown = false;

    for(let i=0; i<s.length ;i++) {
        rows[currRow] += s[i];

        if(currRow === 0 || currRow === numRows - 1) goingDown = !goingDown;

        currRow += goingDown? 1: -1;
    }

    return rows.join('');
};
