export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

export function randomOperation(numArr) {
  let tempArr = numArr.slice(0); // bugfix

  let selectedNum = getRandomInt(0, 2);
  let randomOperator = getRandomInt(0, 2);

  let operators = ["-", "+"];

  switch (operators[randomOperator]) {
    case "+":
      tempArr[selectedNum]++;
      break;
    case "-":
      tempArr[selectedNum]--;
      break;
    default:
      tempArr[selectedNum]++;
  }

  return tempArr[0] * tempArr[1];
}

export function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export function isUnique(numArr) {
  var unique = numArr.filter((v, i, a) => a.indexOf(v) === i);
  return unique.length;
}
