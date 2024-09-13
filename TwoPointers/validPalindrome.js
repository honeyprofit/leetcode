var isPalindrome = function(s) {
    let filtered = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    

    return filtered === filtered.split('').reverse().join('');
};
