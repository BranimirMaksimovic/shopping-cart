import React, { useState } from "react";
import SingleProduct from "../SingleProduct";
import styles from "./Home.module.css";
import { generateFakerData } from "./Home.utility";

const Home = () => {
  const productsArray = generateFakerData(50);

  const [products, setProducts] = useState(productsArray);

  return (
    <div className={styles.productContainer}>
      {products.map((prod) => (
        <SingleProduct key={prod.id} prod={prod} />
      ))}
    </div>
  );
};

export default Home;
