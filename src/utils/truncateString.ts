export const truncateString = (str: string, count: number) => {
  return str.length > count ? str.slice(0, count - 1) + "..." : str;
};
