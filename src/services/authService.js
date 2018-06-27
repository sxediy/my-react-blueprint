import axios from 'axios';

export const logIn = (username, password) => {
  const URL = 'http://localhost:4000/';
  const API = axios.create({ baseURL: URL });

  return new Promise((resolve, reject) => {
    API.get(`auth?username=${username}`)
      .catch(error => console.log(error))
      .then(({ data }) => data[0])
      .then(({ username: user, password: pass }) => user === username && pass === password)
      .catch(() => console.log('Данного пользователя нет в базе данных\n'))
      .then(check => {
        if (check === true) {
          resolve();
          console.log(`Вход успешно выполнен под пользователем ${username}`);
        }
        if (check === false) {
          console.log(`Неправильный пароль для входа пользователя ${username}\n`);
          reject(new Error('Incorrect username or password.'));
        }
      });
  });
};
