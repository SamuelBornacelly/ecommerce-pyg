import { Flex, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React from 'react'
import "./css/sideMenu.css";
import { HamburgerIcon } from '@chakra-ui/icons';

export  const SideMenu = () => {
  return (
    <Flex className="sideMenu">
      <Menu>
        <MenuButton className="menuButton">
          <HamburgerIcon />
        </MenuButton>
        <MenuList className="menuList">
          <MenuItem>Lo más vendido</MenuItem>
          <MenuItem>Por género</MenuItem>
          <MenuItem>Novedades</MenuItem>
          <MenuItem>Ofertas</MenuItem>
          <MenuItem>Fragancias ocacionales</MenuItem>
          <MenuItem>Fragancias recomendadas</MenuItem>
          <MenuItem>Experiencias sensoriales</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}
