const nbYear = (p0, percent, aug, p) => {
  years = 0;
  while (p0 < p) {
    years++;
    p0 = p0 + (p0 * (percent / 100) + aug);
  }
  return years;
};

console.log(nbYear(1000500, 50, -100000, 5000000000));
