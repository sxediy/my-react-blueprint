export const logIn = (username, password) => (
  new Promise((resolve, reject) => {
    if (username === 'megafon' && password === 'megafon') {
      resolve();
      console.log(`Вход выполнен под пользователем ${username}`);
    } else {
      reject(new Error('Incorrect username or password.'));
    }
  })
);

