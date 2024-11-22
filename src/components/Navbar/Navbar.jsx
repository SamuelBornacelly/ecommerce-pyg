/**
 * @license
 * Copyright 2024 Perfumeria P&G
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */
import { Box, Button, Flex, Grid, Image, MenuButton } from "@chakra-ui/react";
import React, { useState } from "react";
import { ProfileDropdown } from "./ProfileDropdown";
import { InventoryDropdown } from "./InventoryDropdown";
import { ShoppingCart } from "./ShoppingCart";
import "./css/Navbar.css";
import { SideMenu } from "./SideMenu";
import { LoginForms } from "./LoginForms";
import { AppRoute } from "../../../Utils/AppRouter";
import { useNavigate } from "react-router";

export const Navbar = () => {
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (card) => {
    setActiveCard(activeCard === card ? null : card);
  };

  const navigate = useNavigate();

  //hay que modificar el navigate porque enta renderizando mal 

  return (
    <Flex className="navbar">
      <SideMenu />
      <Button
        display="flex"
        flexDirection="column"
        alignItems="center"
        background="transparent"
        onClick={() =>{navigate(AppRoute.Base)
          console.log("si esta funcionando aqui ")
        }}
      >
        <Image
          // className="header__logo"
          display="block"
          margin="0 auto"
          boxSize="150%"
          src="../../../img/logo.png"
          alt="Logo perfumeria PyG"
          _hover="none"
        ></Image>
      </Button>
      <Flex>
        <Button
          background="white"
          size="lg"
          onClick={
            navigate(AppRoute.Inventory)}
        >
          <img
            className="navbar__button_img"
            src="./img/inventory.png"
            alt="Icon inventory"
          />
        </Button>
        <Button
          background="white"
          size="lg"
          onClick={() => toggleCard("shopping")}
        >
          <img
            className="navbar__button_img"
            src="./img/cart.png"
            alt="Icon cart"
          />
        </Button>
        <Button
          background="white"
          size="lg"
          onClick={() => toggleCard("profile")}
        >
          <img
            className="navbar__button_img"
            src="./img/user.png"
            alt="Icon user"
          ></img>
        </Button>
      </Flex>
      {activeCard === "profile" && <LoginForms />}
      {activeCard === "shopping" && <ShoppingCart />}
      {activeCard === "Inventory" && <InventoryDropdown />}
    </Flex>
  );
};
