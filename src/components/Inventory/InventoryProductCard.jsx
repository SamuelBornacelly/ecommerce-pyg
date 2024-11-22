import React from "react";
import {
  Box,
  Image,
  Text,
  Button,
  HStack,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";

export const InventoryProductCard = ({ product }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      boxShadow="sm"
    >
      <Image src={product.image} alt={product.name} mb={3} />
      <Text fontWeight="bold" fontSize="lg" mb={2}>
        {product.name}
      </Text>
      <Text mb={2}>Tamaño:</Text>
      <RadioGroup defaultValue={product.sizes[0]} mb={3}>
        <HStack spacing={4}>
          {product.sizes.map((size) => (
            <Radio key={size} value={size}>
              {size}
            </Radio>
          ))}
        </HStack>
      </RadioGroup>
      <Button colorScheme="teal" width="full">
        Agregar otro tamaño
      </Button>
    </Box>
  );
};


