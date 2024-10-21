/**
 * @license
 * Copyright 2024 Perfumeria P&G
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */

import React from "react";
import ProductsCard from "./productsCard";

const ProductsCardList = ({ products, addToCart }) => {
  return (
    <main className="main">
      <h2>Products</h2>
      <div className="products">
        {/* {products.map((product) => (
          <ProductsCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))} */}
        <ProductsCard product={0} addToCart={true} />
      </div>
    </main>
  );
};

export default ProductsCardList;
