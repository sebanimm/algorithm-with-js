function solution(friends, gifts) {
  let answer;
  let presentHistory = {};

  for (const from of friends) {
    presentHistory[from] = { measurement: 0, next: 0 };
    for (const to of friends) {
      presentHistory[from][to] = 0;
    }
  }

  for (const gift of gifts) {
    const participants = gift.split(" ");
    const from = participants[0];
    const to = participants[1];

    presentHistory[from][to] += 1;
    presentHistory[from].measurement += 1;

    presentHistory[to].measurement -= 1;
  }

  for (const A of friends) {
    for (const B of friends) {
      if (A === B) break;

      const a = presentHistory[A];
      const b = presentHistory[B];

      if (a[B] > b[A]) {
        a.next += 1;
      } else if (b[A] > a[B]) {
        b.next += 1;
      } else {
        if (a.measurement > b.measurement) {
          a.next += 1;
        } else if (b.measurement > a.measurement) {
          b.next += 1;
        }
      }
    }
  }

  let counts = [];

  for (const friend of friends) {
    counts.push(presentHistory[friend].next);
  }

  console.log(counts);

  answer = Math.max(...counts);

  return answer;
}
