var romanToInt = function (s) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;
  let preValue = 0;

  for (let i = 0; i < s.length; i++) {
    let currentValue = romanMap[s[i]];

    if (currentValue > preValue) {
      total = total + currentValue - preValue - preValue;
    } else {
      total += currentValue;
    }

    preValue = currentValue;
  }

  console.log(total);
  return total;
};

romanToInt("MCMXCIV");
