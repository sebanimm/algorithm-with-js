function solution(wallpaper) {
  let width = [];
  let height = [];

  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] === "#") {
        width.push(j + 1);
        height.push(i + 1);
      }
    }
  }

  var answer = [
    Math.min(...height) - 1,
    Math.min(...width) - 1,
    Math.max(...height),
    Math.max(...width),
  ];

  return answer;
}
