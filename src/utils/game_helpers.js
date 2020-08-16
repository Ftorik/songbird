const getRandomArrayIndex = array => Math.floor(Math.random() * array.length);

export const getRandomSoundFromData = array => array[getRandomArrayIndex(array)]

// export const getScoreForAttempt = attempt => questionReward - attempt;