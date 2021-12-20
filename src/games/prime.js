import runGame from '../index.js';
import randomNumber from '../utils.js';

const gameDescription = 'Напишите "да" если данное число простое. В остальных случаях "нет".';

const isPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i ++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

const getGameData = () => {
  const number = randomNumber(1, 100);
  const correctAnswer = isPrime(randomNumber) ? 'да' : 'нет';
  return [number, correctAnswer];
};

const startGame = () => runGame(gameDescription, getGameData);

export default startGame;
