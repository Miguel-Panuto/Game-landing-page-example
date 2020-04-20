import React from "react";

import GameImg from "../../assets/images/fossil_cave.jpg";
import AppStore from "../../assets/icons/appstore.png";
import GooglePlay from "../../assets/icons/googleplay.png";
import { Container, CenterContainer as Center } from "./styles";

const Apr = () => (
  <Container>
    <Center>
      <div className="top-text">
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta
          dui justo, id semper quam sagittis sit amet. Etiam a.
        </p>
        <div>
          <a href="">
            <img src={AppStore} alt="App store icon" />
          </a>
          <a href="">
            <img src={GooglePlay} alt="Google play icon" />
          </a>
        </div>
      </div>
      <div className="img-top">
        <img src={GameImg} alt="Game image" />
      </div>
    </Center>
  </Container>
);

export default Apr;
