// database generator

const faker = require('faker')
const data = []
const fs = require('fs')

for (i = 0; i < 10; i++) {
  newItem = {
    id: faker.random.number(),
    name: faker.commerce.productName(),
    'short-description': 'Here is a very brief description of the product',
    'long-description':
      "Here is a more detailed summary of the product name, it's uses, inductries and possible attributes that could be used to descript the product.",
    'ordered-by': 'Mark Saunders',
    'last-ordered': '05/24/2018',
    location: 'Toronto, CAN',
    quantity: 12000,
    'reference-number': faker.finance.bic(),
    'in-stock': true,
    categories: ['Industrial', 'Automotive', 'Heavy', 'Mechanical', 'Engineering', 'Sales']
  }

  data.push(newItem)
}

// newItem = {
//   id: fake.finance.mask(),
//   name: faker.commerce.productName(),
//   'short-description': 'Here is a very brief description of the product',
//   'long-description':
//     "Here is a more detailed summary of the product name, it's uses, inductries and possible attributes that could be used to descript the product.",
//   'ordered-by': 'Mark Saunders',
//   'last-ordered': '05/24/2018',
//   location: 'Toronto, CAN',
//   quantity: 12000,
//   'reference-number': faker.finance.bic(),
//   'in-stock': true,
//   categories: ['Industrial', 'Automotive', 'Heavy', 'Mechanical', 'Engineering', 'Sales']
// }

// newItem = {
//   id: i,
//   name: faker.company.companyName(),
//   address:
//     faker.address.streetAddress() +
//     ', ' +
//     faker.address.city() +
//     ', ' +
//     faker.address.stateAbbr(),
//   'postal-code': faker.address.zipCode(),
//   'country-code': faker.address.countryCode(),
//   'contact-name': faker.name.findName(),
//   'contact-title': faker.name.title(),
//   'contact-phone': faker.phone.phoneNumberFormat(),
//   'contact-email': faker.internet.exampleEmail().toLowerCase(),
//   categories: ['Industrial', 'Automotive', 'Heavy', 'Mechanical', 'Engineering'],
//   inventory: []
// }

fs.writeFileSync('dataMaster.json', JSON.stringify(data))
// console.log(data)
