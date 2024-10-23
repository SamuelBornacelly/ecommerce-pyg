/**
 * @license
 * Copyright 2024 Perfumeria P&G
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */

import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Grid, Image, MenuButton } from "@chakra-ui/react";
import React, { useState } from "react";
import { ProfileDropdown } from "./ProfileDropdown";
import { InventoryDropdown } from "./InventoryDropdown";
import { ShoppingCart } from "./ShoppingCart";
import "./css/Navbar.css";
import { SideMenu } from "./SideMenu";
import { LoginForm } from "./LoginForm";

export const Navbar = () => {
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (card) => {
    setActiveCard(activeCard === card ? null : card);
  };

  
  return (
    <Flex className="navbar">
      <SideMenu />
      <Image
        className="header__logo"
        src="../../../img/logo.png"
        alt="Logo perfumeria PyG"
      ></Image>
      <Flex>
        <Button
          background="white"
          size="lg"
          onClick={() => toggleCard("Inventory")}
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
      {activeCard === "profile" && <LoginForm />}
      {activeCard === "shopping" && <ShoppingCart />}
      {activeCard === "Inventory" && <InventoryDropdown />}
    </Flex>
  );
};
