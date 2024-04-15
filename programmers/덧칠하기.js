function solution(n, m, section) {
  let count = 0;
  let reachFromSelectedArea = 0;

  for (const selectedArea of section) {
    if (reachFromSelectedArea < selectedArea) {
      reachFromSelectedArea = selectedArea + m - 1;
      count++;
    }
  }

  return count;
}
