import readlineSync from 'readline-sync';

const greetingUser = () => {
  console.log('Добро пожаловать в игру!');
  const userName = readlineSync.question('Укажите свое имя ');
  console.log(`привет, ${userName}!`);
};

export default greetingUser;
