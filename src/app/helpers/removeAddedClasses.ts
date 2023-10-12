export function removeAddedClasses(elementsArr: Array<Element>) {
  elementsArr.forEach((el) => {
    el.classList.forEach((className: string, index: number) => {
      if (index === 0) return;

      el.classList.remove(className);
    });
  });
}
