/**
 * @license
 * Copyright 2024 Perfumeria P&G
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */

import { Flex } from "@chakra-ui/react";
import ProductsCard from "../Products/productsCard";

export const ShoppingCart = () => {
  // const handleRemove = (id) => {
  //   setCart((prevCart) => {
  //     const newCart = { ...prevCart };
  //     if (newCart[id].amount === 1) {
  //       delete newCart[id];
  //     } else {
  //       newCart[id].amount -= 1;
  //     }
  //     window.localStorage.setItem("cart", JSON.stringify(newCart));
  //     return newCart;
  //   });
  // };

  // const handleAdd = (id) => {
  //   setCart((prevCart) => {
  //     const newCart = { ...prevCart };
  //     newCart[id].amount += 1;
  //     window.localStorage.setItem("cart", JSON.stringify(newCart));
  //     return newCart;
  //   });
  // };

  // const cartItems = Object.values(cart);

  return (
    <Flex
      maxW="sm"
      mt="500px"
      p="6"
      borderWidth="1px"
      borderRadius="lg"
      background="white"
    >
      <ProductsCard widthImg={"100px"} heightImg={"100px"} hasDescription={false}/>
    </Flex>
  );
};
