const DATA1 = [5, 2, 4, 1, 15, 8, 3];
const DATA2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
  console.log(humanAges);

  const adults = humanAges.filter(mov => mov >= 18);
  console.log(adults);

  const averageHumanAge = adults.reduce(
    (acc, cur, index, array) => acc + cur / array.length,
    0
  );
  console.log('average:' + averageHumanAge);
};

calcAverageHumanAge(DATA1);
calcAverageHumanAge(DATA2);
