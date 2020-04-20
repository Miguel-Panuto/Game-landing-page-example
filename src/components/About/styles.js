import styled from "styled-components";

export const Container = styled.section`
  padding: 20px 0;
  .title h2 {
    display: inline-block;
    color: #111;
    padding-bottom: 20px;
    border-bottom: 3px solid #1a1;
    padding-right: 15px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  @media screen and (max-width: 768px){
    flex-direction: column;
  }
`;