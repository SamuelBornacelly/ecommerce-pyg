/**
 * @license
 * Copyright 2024 Perfumeria P&G
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Image,
  Input,
  Stack,
} from "@chakra-ui/react";
export const LoginForm = () => {
  const handleSubmit = () => {
    console.log("Form submitted");
  };

  return (
    <Grid
      mt="30%"
      p="6"
      borderWidth="1px"
      borderRadius="lg"
      background="white"
      position="fixed"
      gap="3"
      ml="81em"
    >
      <Heading as="h2" size="md" my="5" textAlign="center">
        Iniciar Sesión en perfumería P&G
      </Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl id="email" isRequired>
            <FormLabel textAlign="center">Correo Electrónico</FormLabel>
            <Input type="email" placeholder="tu-email@example.com" />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel textAlign="center">Contraseña</FormLabel>
            <Input type="password" placeholder="********" />
          </FormControl>
          <Button type="submit" colorScheme="gray" width="full">
            Iniciar Sesión
          </Button>
          <Button type="submit" colorScheme="gray" width="full">
            Iniciar Sesión con Google
          </Button>
          <Button type="submit" colorScheme="teal" width="full">
            Crear cuenta nueva
          </Button>
        </Stack>
      </form>
    </Grid>
  );
};
