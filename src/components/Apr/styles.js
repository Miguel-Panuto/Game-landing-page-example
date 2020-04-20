import styled from 'styled-components';
import { Center } from '../../global-styles';

export const Container = styled.section`
    margin-top: 100px;
    @media screen and (max-width: 760px) {
        margin-top: 50px;
    }
`;

export const CenterContainer = styled(Center)`
    display: flex;

    .img-top > img {
        width: 460px;
        border-radius: 10px;
    }

    .top-text {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    .top-text h2 {
        font-size: 1.8rem;
        margin-bottom: 30px;
    }

    .top-text p {
        line-height: 20px;
        font-size: 1.2rem;
        margin-bottom: 40px;
    }
    @media screen and (max-width: 760px){
        flex-direction: column;
        .top-text {
            margin-bottom: 20px;
        }
        .img-top > img {
            margin: 0;
            width: 100vw;
            max-width: 100%;
        }
    }
`;