type Element = {
  classList: Array<string>;
};

export function removeAddedClasses(elementsArr: Array<any>) {
  elementsArr.forEach((el) => {
    el.classList.forEach((className: string, index: number) => {
      if (index === 0) return;

      el.classList.remove(className);
    });
  });
}
