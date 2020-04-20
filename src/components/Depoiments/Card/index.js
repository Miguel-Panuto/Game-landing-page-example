import React from 'react';

import { Container } from './styles';
import { IoMdQuote } from "react-icons/io";

const Card = (props) => (
    <Container>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            consectetur arcu odio, non ullamcorper sapien.
          </p>
          <br />
          <span>Michael Pannu</span>
        </div>
        <div className="icon-container">
          <IoMdQuote color="#ccc" size="60px"/>
        </div>
    </Container>
);

export default Card;
