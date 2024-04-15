function solution(keymap, targets) {
  let answer = [];
  let minimumAccess = {};

  keymap = keymap.map((key) => key.split(""));

  for (let i = 0; i < keymap.length; i++) {
    for (const key of keymap[i]) {
      const index = keymap[i].indexOf(key) + 1;

      if (!minimumAccess[key] || index < minimumAccess[key]) {
        minimumAccess[key] = index;
      }
    }
  }

  targets = targets.map((target) => target.split(""));

  for (let i = 0; i < targets.length; i++) {
    let sum = 0;
    let isAccessable = true;

    for (const target of targets[i]) {
      const value = minimumAccess[target];

      if (value) {
        sum += value;
      } else {
        isAccessable = false;
        break;
      }
    }

    const result = isAccessable ? sum : -1;
    answer.push(result);
  }

  return answer;
}
