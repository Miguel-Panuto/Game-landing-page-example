import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-bottom: 10px;
  background-color: #fff;
  width: 45%;
  margin-right: 5%;
  padding: 30px;
  font-weight: bold;
  border-radius: 5px;
  box-shadow: 2px 2px 2px #1113;
  .icon-container {
    position: relative;
    top: -20px;
    right: -20px;
  }
  p {
    color: #111;
    font-size: 13px;
  }
  span {
    color: #2b2;
    font-size: 13px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 10px 0;
  }
`;

