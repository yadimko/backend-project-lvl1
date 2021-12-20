import readlineSync from 'readline-sync';

const countRounds = 3;

const runGame = (gameDescription, getGameData) => {
  console.log('Добро пожаловать в игру!');
  const userName = readlineSync.question('Укажите свое имя ');
  console.log(`привет, ${userName}!`);
  console.log(gameDescription);

  for (let i = 0; i < countRounds; i ++) {
    const gameData = getGameData();
    const question = gameData[0];
    const correctAnswer = gameData[1];
    console.log(`Вопрос: ${question}`);
    const answer = readlineSync.question('Ответ: ');

    if (correctAnswer === answer) {
      console.log('Правильно!');
    } else {
      console.log(`'${answer}' неправильный ответ ;(. Правильный ответ - '${correctAnswer}'.\nПопробуйте еще раз, ${userName}!`);
      return;
    }
  }

  console.log(`Поздравляем, ${userName}!`);
};

export default runGame;
