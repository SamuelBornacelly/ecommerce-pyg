/**
 * @license
 * Copyright 2024 Perfumeria P&G
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */

import { Box, Flex, Grid, Image, SmallCloseIcon, Text } from "@chakra-ui/icons";
import React from "react";

const ProductsCard = ({ product, addToCart, hasDescription = true, widthImg, heightImg}) => {
  return (
    <Grid className="cart__modal">
      <Box className="cart__product_title">
        <Text fontSize="md" fontWeight="bold">
          {"Susurros de Noche"}
        </Text>
        <Image
          width={widthImg}
          height={heightImg}
          className="cart__product_img"
          src={
            "https://sp.victoriassecret.com/p/380x507/tif/62/09/620970966f984559b80ea0c21f658445/111893792457_OF_F.jpg"
          }
          alt=""
        />
      </Box>
      {hasDescription && (
        <Text fontSize="md">
          {
            "Susurros de Noche es un perfume que captura la esencia de una velada mágica. Es ideal para una noche de gala o una cena romántica, evocando emociones y dejando una impresión duradera. Perfecto para quienes buscan una fragancia que combine frescura y sensualidad."
          }
        </Text>
      )}
      <Box className="cart__product_price" textAlign="center">
        <Text fontSize="lg" fontWeight="bold" color="blue.600">
          Precio {"123.000"}
        </Text>
      </Box>
    </Grid>
  );
};

export default ProductsCard;
