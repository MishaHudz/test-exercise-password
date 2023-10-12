export function addClassesForSomeElementsOfList(
  elementsArr: Array<any>,
  className: string,
  numberOfElements: number
) {
  for (let i = 0; i < numberOfElements; i += 1) {
    elementsArr[i].classList.add(className);
  }
}
