// @flow
// isOldEnoughToDrink
// TODO:{
// var output = isOldEnoughToDrink(22);
// console.log(output); // --> true
// }
function isOldEnoughToDrink(age: number): boolean {
  const minAge = 21;
  return age >= minAge;
}
// isOldEnoughToDrive
// TODO:{
// var output = isOldEnoughToDrive(22);
// console.log(output); // --> true
// }
function isOldEnoughToDrive(age: number): boolean {
  const minAge = 16;
  return age >= minAge;
}
// isOldEnoughToVote
// var output = isOldEnoughToVote(22);
// console.log(output); // --> true

function isOldEnoughToVote(age?: number): boolean {
  const minAge = 18;
  if (typeof age === 'undefined') {
    return false;
  }
  return age >= minAge;
}
// addArrayProperty
// var myObj = {};
// var myArray = [1, 3];
// addArrayProperty(myObj, 'myProperty', myArray);
// console.log(myObj.myProperty); // --> [1, 3]
type OldObject = {
  [key: string]: mixed,
};

function addArrayProperty(oldObject: OldObject, key: string, newValue: Array<number>): Object {
  return Object.assign(oldObject, { [key]: newValue });
}
// computeCompoundInterest
// TODO:{
// var output = computeCompoundInterest(1500, .043, 4, 6);
// console.log(output); // --> 438.8368221341061
// }
function computeCompoundInterest(
  principalValue: number,
  interestRateValue: number,
  compoundingFrequencyValue: number,
  timeInYearsValue: number,
): number {
  let calculation = interestRateValue / compoundingFrequencyValue;
  calculation += 1;
  calculation **= compoundingFrequencyValue * timeInYearsValue;
  calculation *= principalValue;
  calculation -= principalValue;
  return calculation;
}
export {
  isOldEnoughToDrink,
  isOldEnoughToDrive,
  isOldEnoughToVote,
  addArrayProperty,
  computeCompoundInterest,
};