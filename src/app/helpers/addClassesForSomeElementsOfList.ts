export function addClassesForSomeElementsOfList(
  elementsArr: Array<Element>,
  className: string,
  numberOfElements: number
) {
  for (let i = 0; i < numberOfElements; i += 1) {
    elementsArr[i].classList.add(className);
  }
}
