import runGame from '../index.js';
import randomNumber from '../utils.js';

const gameDescription = 'Какое число пропущено в ряду чисел?';

const getProgression = (start, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i ++) {
    progression.push(start + i * step);
  }

  return progression;
};

const getGameData = () => {
  const start = randomNumber(0, 5);
  const step = randomNumber(1, 5);
  const length = randomNumber(10, 15);
  const progression = getProgression(start, step, length);
  const hiddenNumber = randomNumber(0, progression.length - 1);
  const correctAnswer = progression[hiddenNumber].toString();
  progression[hiddenNumber] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

const startGame = () => runGame(gameDescription, getGameData);

export default startGame;
