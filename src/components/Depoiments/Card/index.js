import React from "react";

import { Container } from "./styles";
import { IoMdQuote } from "react-icons/io";

const Card = (props) => (
  <Container>
    <div>
      <p>{props.children}</p>
      <br />
      <span>{props.person}</span>
    </div>
    <div className="icon-container">
      <IoMdQuote color="#ccc" size="60px" />
    </div>
  </Container>
);

export default Card;
