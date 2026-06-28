const { faker } = require("@faker-js/faker");

const sentiments = ["Positive", "Neutral", "Negative"];

const hotels = [
  "Trishul Grand Hotel",
  "Royal Palace",
  "Ocean View Resort",
  "Hilltop Inn",
  "Luxury Suites"
];

const reviews = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  guestName: faker.person.fullName(),
  hotel: faker.helpers.arrayElement(hotels),
  review: faker.lorem.sentences(2),
  sentiment: faker.helpers.arrayElement(sentiments),
  rating: faker.number.int({ min: 1, max: 5 }),
  date: faker.date.recent().toISOString().split("T")[0]
}));

const getNextId = () =>
  reviews.length
    ? Math.max(...reviews.map(r => r.id)) + 1
    : 1;

module.exports = {
  reviews,
  getNextId
};