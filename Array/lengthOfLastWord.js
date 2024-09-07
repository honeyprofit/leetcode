var lengthOfLastWord = function(s) {
  let word = s.trim().split(" ");
  console.log(word);
  return word[word.length - 1].length;
};

console.log(lengthOfLastWord("luffy is still joyboy"));
