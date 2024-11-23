import { Flex, Image } from "@chakra-ui/react";
import { Link } from "react-router";

export const NotFoundCardPage = () => {
  return (
    <Image
      src="../../img/Sorry_not_found.png"
      alt="not_found"
      w="85vh"
      p="10vh"
      borderRadius="15%"
    ></Image>
  );
};
