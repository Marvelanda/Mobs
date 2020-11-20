
export const myArray = [
  [55.684758, 37.738521],
  [55.684758, 37.11],
  [55.833436, 37.715175],
  [55.687086, 37.529789],
  [55.80, 37.40],
  [55.70, 37.40],
  [55.81, 37.65],
  [55.73, 37.65],
  [55.81, 37.75],
  [55.76, 37.64],
  [55.8, 37.8],
  [55.847, 37.6],
  [55.751574, 37.573856],
  [55.661574, 37.573856],
  [55.73, 37.75],

]

export function getRandomFive(myArray) {
  let randomFiveArray = [];
   for (let i = 0; i < 5; i += 1) {
     randomFiveArray.push(myArray[Math.floor(Math.random() * myArray.length)])
   }
   return randomFiveArray
}




