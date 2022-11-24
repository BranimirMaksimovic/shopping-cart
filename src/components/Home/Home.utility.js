import { faker } from "@faker-js/faker";

faker.seed(100);

export const generateFakerData = (number) =>
  [...Array(number)].map((p) => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.technics(640, 480, true),
  }));
