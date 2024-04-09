function solution(bandage, health, attacks) {
  const maxHealth = health;
  const [castingTime, healingPerSeconds, additionalHealing] = bandage;
  const finalAttackTime = attacks.at(-1)[0];
  let combo = 0;

  for (let time = 1; time <= finalAttackTime; time++) {
    const [attackTime, attackDamage] = attacks[0];

    if (attackTime !== time) {
      combo += 1;
      health += healingPerSeconds;

      if (health >= maxHealth) {
        health = maxHealth;
        continue;
      }

      if (combo === castingTime) {
        health += additionalHealing;
        combo = 0;
      }
    } else if (attackTime === time) {
      health -= attackDamage;
      attacks.shift();
      combo = 0;
    }

    if (health <= 0) break;
  }

  return health <= 0 ? -1 : health;
}
