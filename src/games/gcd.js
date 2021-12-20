import runGame from '../index.js';
import randomNumber from '../utils.js';

const gameDescription = 'Найдите наибольший общий делитель.';

const getGcd = (firstValue, secondValue) => {
  if (!secondValue) {
    return firstValue;
  }

  return getGcd(secondValue, firstValue % secondValue);
};

const getGameData = () => {
  const number1 = randomNumber(1, 100);
  const number2 = randomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = getGcd(number1, number2).toString();

  return [question, correctAnswer];
};

const startGame = () => runGame(gameDescription, getGameData);

export default startGame;
