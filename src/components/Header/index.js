import React from "react";

import Logo from "../../assets/NiceGamming.png";

import { Center, Clear } from "../../global-styles";
import { Container, Logo as LogoContainer, Menu } from "./styles";

const Header = () => (
  <Container>
    <Center>
      <LogoContainer>
        <a href="">
          <img src={Logo} alt="Nice Gamming logo" />
        </a>
      </LogoContainer>
      <Menu>
        <a href="">Sobre</a>
        <a href="">Depoimentos</a>
        <a href="" className="btn-cta">Baixar Agora!</a>
      </Menu>
      <Clear />
    </Center>
  </Container>
);

export default Header;
