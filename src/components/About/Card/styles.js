import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
  margin-right: 20px;
  flex: ${props => props.flex};
  box-shadow: 2px 2px 4px #1112;
  .title-container {
    display: flex;   
  }
  .title-container > .img-container { 
    flex: 1;
    background-color: #1a1;
  }

  .img-container > img {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .title-container > h2 {
    flex: ${props => props.flex};
    font-weight: normal;
    padding: 30px 5px;
    font-size: 1.2rem;
    background-color: #cdc;
  }

  p {
    background-color: #fff;
    padding: 10px;
    height: 100px;
  }
  @media screen and (max-width: 768px){
    width: 100%;
    .title-container > h2 {
      flex: 2;
    }
  }
`;
