import axios from 'axios';

export const logIn = (username, password) => {
  const URL = 'http://localhost:4000/';
  const API = axios.create({ baseURL: URL });

  return new Promise((resolve, reject) => {
    API.get(`auth?username=${username}`)
      .catch(() => reject(new Error('Oops, there seems to be a problem with the network connection. Run *npm run server* in a CLI')))
      .then(({ data }) => data[0])
      .then(({ username: user, password: pass }) => user === username && pass === password)
      .catch(() => reject(new Error('Incorrect username')))
      .then(check => {
        if (check === true) {
          resolve();
          console.log(`Вход успешно выполнен под пользователем ${username}`);
        }
        if (check === false) {
          reject(new Error(`Incorrect password for ${username}`));
        }
      });
  });
};
