import styled from 'styled-components';

export const Container = styled.header`
    margin-top: 10px;
`;

export const Logo = styled.div`
    float: left;
    img {
        max-width: 100%;
    }
`;

export const Menu = styled.div`
    float: right;
    margin-top: 25px;
    a {
        text-decoration: none;
        color: #111;
        font-size: 15px;
        margin: 0 15px;
    }
    a.btn-cta {
        background-color: #30851d;
        color: white;
        font-size: 18px;
        padding: 8px 30px;
    }
`;
