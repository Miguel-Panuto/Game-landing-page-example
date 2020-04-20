import React from "react";

import { Container, CardContainer } from "./styles";
import { Center } from '../../global-styles'
import GameController from "../../assets/icons/game-controller.svg";
import Star from "../../assets/icons/star.svg";
import Users from "../../assets/icons/users.svg";

import Card from "./Card";

const About = () => (
  <Container>
    <Center>
      <div className="title">
        <h2>Sobre</h2>
      </div>
      <CardContainer> 
        <Card title="Totalmente Multiplayer" icon={Users} flex="2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          efficitur tortor nisi.
        </Card>
        <Card title="Desafios toda semana!" icon={Star} flex="2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          efficitur tortor nisi.
        </Card>
        <Card
          title="Jogue em todas as plataformas possíveis"
          icon={GameController}
          flex="3"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          efficitur tortor nisi.
        </Card>
      </CardContainer>
    </Center>
  </Container>
);

export default About;
