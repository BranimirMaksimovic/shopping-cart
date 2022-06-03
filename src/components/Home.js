import React from "react";
import { faker } from "@faker-js/faker";

const Home = () => {
  const productsArray = [...Array(20)].map((p) => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.technics(),
  }));
  console.log(productsArray);

  return <div>Home</div>;
};

export default Home;
