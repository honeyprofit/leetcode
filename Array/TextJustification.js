var fullJustify = function(words, maxWidth) {
     const result = [];
    let currentLine = [];
    let currentLineLength = 0;

    for (let word of words) {
        // Check if adding the current word would exceed the maxWidth
        if (currentLineLength + word.length + currentLine.length > maxWidth) {
            // Distribute spaces evenly for the current line
            let totalSpaces = maxWidth - currentLineLength;
            let numberOfGaps = currentLine.length - 1;
            
            if (numberOfGaps === 0) {
                // If there is only one word in the line, it should be left-justified
                result.push(currentLine[0] + ' '.repeat(totalSpaces));
            } else {
                let spaces = Math.floor(totalSpaces / numberOfGaps);
                let extraSpaces = totalSpaces % numberOfGaps;

                for (let i = 0; i < extraSpaces; i++) {
                    currentLine[i] += ' '; // Assign extra spaces to the leftmost gaps
                }

                result.push(currentLine.join(' '.repeat(spaces)));
            }

            currentLine = [];
            currentLineLength = 0;
        }

        // Add the current word to the line
        currentLine.push(word);
        currentLineLength += word.length;
    }

    // Handle the last line (left-justified)
    result.push(currentLine.join(' ') + ' '.repeat(maxWidth - currentLineLength - (currentLine.length - 1)));

   return result;
};
