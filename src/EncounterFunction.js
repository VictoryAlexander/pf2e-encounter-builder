const EncounterCalculator = (players, creatures) => {
  const lackey = 10;
  const moderateLackey = 15;
  const standardLackey = 20;
  const standardCreature = 30;
  const moderateCreature = 40;
  const lowBoss = 60;
  const moderateBoss = 80;
  const severeBoss = 120;
  const extremeBoss = 160;
  let xpToReward = 0;
  let difficultyRating = '';

  const CalculateChallenge = () => {
    const playerLevel = players.playerLevel;
    let xpBudget = 0;
    creatures.forEach(() => {
      if (creatureLevel <= (playerLevel - 4)) {
        xpBudget += lackey;
      } else if (creatureLevel === (playerLevel - 3)) {
        xpBudget += moderateLackey * numberOfCreatures;
      } else if (creatureLevel === (playerLevel - 2)) {
        xpBudget += standardLackey * numberOfCreatures;
      } else if (creatureLevel === (playerLevel - 1)) {
        xpBudget += standardCreature * numberOfCreatures;
      } else if (creatureLevel === playerLevel) {
        xpBudget += moderateCreature * numberOfCreatures;
      } else if (creatureLevel === (playerLevel + 1)) {
        xpBudget += lowBoss * numberOfCreatures;
      } else if (creatureLevel === (playerLevel + 2)) {
        xpBudget += moderateBoss * numberOfCreatures;
      } else if (creatureLevel === (playerLevel + 3)) {
        xpBudget += severeBoss * numberOfCreatures;
      } else if (creatureLevel >= (playerLevel + 4)) {
        xpBudget += extremeBoss * numberOfCreatures;
      }
    });
    return xpBudget;
  }
  
  if (xpBudget < 40) {
    difficultyRating = 'trivial';
  } else if (40 < xpBudget < 60) {
    difficultyRating = 'low';
  } else if (60 < xpToBudget < 80) {
    difficultyRating = 'moderate';
  } else if (80 < xpToBudget < 120) {
    difficultyRating = 'severe';
  } else if (120 < xpBudget < 160) {
    difficultyRating = 'extreme';
  } else {
    difficultyRating = 'very extreme';
  }

  xpToReward = CalculateChallenge();

  return { xpToReward, difficultyRating }
}

const sampleEncounter = [{creatureLevel: -1, numberOfCreatures: 2}, {creatureLevel: 1, numberOfCreatures: 1}];
const samplePlayers = [{playerLevel: 1, numberOfPlayers: 4}];
