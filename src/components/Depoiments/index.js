import React from "react";

import { Container, CenterContainer as Center } from "./styles";
import Card from "./Card";

const Depoiments = () => (
  <Container>
    <Center>
      <Card person="Michael Pannu">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        consectetur arcu odio, non ullamcorper sapien.
      </Card>
      <Card person="Charles Rubens">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut ipsum
        orci. Donec dui orci.
      </Card>
    </Center>
  </Container>
);

export default Depoiments;
