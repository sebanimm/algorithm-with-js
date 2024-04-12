function solution(park, routes) {
  const directions = {
    "N": [-1, 0],
    "S": [1, 0],
    "W": [0, -1],
    "E": [0, 1],
  };

  let start = [];
  let width = park.length - 1;
  let height = park[0].length - 1;

  for (let i = 0; i < park.length; i++) {
    for (let j = 0; j < park[i].length; j++) {
      if (park[i][j] === "S") {
        start = [i, j];
      }
    }
  }

  routes = routes.map((route) => route.split(" "));

  for (const [direction, distance] of routes) {
    let isBlocked = false;
    let [x, y] = start;

    for (let i = 0; i < parseInt(distance); i++) {
      x += directions[direction][0];
      y += directions[direction][1];

      if (x < 0 || x > width || y < 0 || y > height || park[x][y] == "X") {
        isBlocked = true;
        break;
      }
    }

    if (isBlocked) continue;

    start = [x, y];
  }

  return start;
}
