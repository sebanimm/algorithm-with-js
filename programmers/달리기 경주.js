function solution(players, callings) {
  let playerList = {};

  for (let i = 0; i < players.length; i++) {
    playerList[players[i]] = i;
  }

  for (let i = 0; i < callings.length; i++) {
    const rank = playerList[callings[i]];

    const temp = players[rank];
    players[rank] = players[rank - 1];
    players[rank - 1] = temp;

    playerList[callings[i]] -= 1;
    playerList[players[rank]] += 1;
  }

  return Object.keys(playerList).sort((a, b) => playerList[a] - playerList[b]);
}
