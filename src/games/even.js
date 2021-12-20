import runGame from '../index.js';
import randomNumber from '../utils.js';

const gameDescription = 'Напишите "да" если данное число четное. В остальных случаях "нет".';

const isEven = (number) => number % 2 === 0;

const getGameData = () => {
  const number = randomNumber(1, 100);
  const correctAnswer = isEven(number) ? 'да' : 'нет';
  return [number, correctAnswer];
};

const startGame = () => runGame(gameDescription, getGameData);

export default startGame;
