import runGame from '../index.js';
import randomNumber from '../utils.js';

const gameDescription = 'Какой результат у выражения?';

const calculateAnswer = (firstValue, secondValue, operator) => {
  let result = null;
  switch (operator) {
    case '+':
      result = firstValue + secondValue;
      break;
    case '-':
      result = firstValue - secondValue;
      break;
    case '*':
      result = firstValue * secondValue;
      break;
    default:
  }
  return result;
};

const getGameData = () => {
  const number1 = randomNumber(1, 20);
  const number2 = randomNumber(1, 20);
  const operators = ['+', '-', '*'];
  const operator = operators[randomNumber(0, operators.length - 1)];
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = calculateAnswer(number1, number2, operator).toString();

  return [question, correctAnswer];
};

const startGame = () => runGame(gameDescription, getGameData);

export default startGame;
