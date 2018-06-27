const faker = require('faker');

function generateGeo() {
  const fakeData = [];
  /* eslint-disable */
  for (let id = 0; id < 50; id++) {
  /* eslint-enable */
    const country = faker.address.country();
    const city = faker.address.city();
    const companyName = faker.company.companyName();
    fakeData.push({
      id,
      country,
      city,
      companyName
    });
  }
  return { fakeData };
}
module.exports = generateGeo;
