import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import SingleProduct from "./SingleProduct";
import "./styles.css";

faker.seed(100);

const Home = () => {
  const productsArray = [...Array(20)].map((p) => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.technics(),
  }));
  const [cart, setCart] = useState([]);

  const [products] = useState(productsArray);
  console.log(cart);
  return (
    <div className="productContainer">
      {products.map((prod) => (
        <SingleProduct
          key={prod.id}
          prod={prod}
          cart={cart}
          setCart={setCart}
        />
      ))}
    </div>
  );
};

export default Home;
