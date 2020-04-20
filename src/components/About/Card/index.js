import React from "react";

import { Container } from "./styles";

const Card = (props) => (
  <Container flex={props.flex}>
    <div className="title-container">
      <div className="img-container">
        <img src={props.icon} alt="icon" />
      </div> {/*img-container*/}
      <h2>{props.title}</h2>
    </div>
    <p>{props.children}</p>
  </Container>
);

export default Card;
