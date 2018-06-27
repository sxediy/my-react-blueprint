const faker = require('faker');

function generateEmployees() {
  const employees = [];
  /* eslint-disable */
  for (let id = 0; id < 50; id++) {
  /* eslint-enable */
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();
    employees.push({
      id,
      firstName,
      lastName,
      email
    });
  }
  return { employees };
}
module.exports = generateEmployees;
