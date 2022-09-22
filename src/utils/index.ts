export const joinClasses = (...classNames: Array<string>) => {
  return classNames.reduce((acc, curr) => `${acc} ${curr}`, "");
};

export const sortFunctions = {
  string: (first: string, second: string) => {
    if (first < second) return -1;
    if (first > second) return 1;
    return 0;
  },
  number: (first: number, second: number) => first - second,
};

export const stringSort = (first: string, second: string) => {
  if (first < second) return -1;
  if (first > second) return 1;
  return 0;
};
