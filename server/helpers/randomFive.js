const myArray = [
  [55.684758, 37.738521],
  [55.68, 37.5],
  [55.833436, 37.715175],
  [55.787086, 37.529789],
  [55.8, 37.4],
  [55.7, 37.4],
  [55.81, 37.65],
  [55.73, 37.65],
  [55.81, 37.75],
  [55.76, 37.64],
  [55.8, 37.8],
  [55.847, 37.6],
  [55.751574, 37.573856],
  [55.661574, 37.573856],
  [55.73, 37.75],
];

function randomizeIndex(filteredArr) {
  return Math.floor(Math.random() * filteredArr.length);
}

export function getRandomFive(myArray) {
  const filteredArr = myArray.filter((el) => el.secrecy === 1);

  let randomFiveArray = [];
  let indexArray = [];
  for (let i = 0; i < 3; i += 1) {
    let randIndex = randomizeIndex(filteredArr);
    while (indexArray.some((el) => el === randIndex)) {
      randIndex = randomizeIndex(filteredArr);
    }
    indexArray.push(randIndex);
    randomFiveArray.push(filteredArr[randIndex]);
  }

  return randomFiveArray;
}
