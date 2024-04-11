function solution(name, yearning, photo) {
  let scores = {};

  for (let i = 0; i < name.length; i++) {
    if (i > yearning) scores[name[i]] = 0;
    scores[name[i]] = yearning[i];
  }

  let answer = [];

  for (const friends of photo) {
    let sum = 0;

    for (const friend of friends) {
      if (scores.hasOwnProperty(friend)) sum += scores[friend];
    }

    answer.push(sum);
  }

  return answer;
}
