import styled from "styled-components";

export const Container = styled.div `
    h1 {
        color: ${({theme}) => theme.colors.main3};
    }

    img {
        width: 32.0rem;
    }

    p {
        margin-top: 1.6rem;
    }
`;