export const formatDecimal = (num: number, round: boolean = false) => {
  if (round) {
    return Math.round(num);
  }

  return Math.round(num * 10) / 10;
};
