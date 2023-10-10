export function removeAddedClasses(elementsArr: any) {
  elementsArr.forEach((el: any) => {
    el.classList.forEach((className: any, index: any) => {
      if (index === 0) return;

      el.classList.remove(className);
    });
  });
}
