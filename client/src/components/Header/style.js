import styled from "styled-components"

export const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 10.0rem;
    width: 100%;
    padding: 2.4rem;
    background: ${({theme}) => theme.colors.background};
    color: white;
    border-bottom: .4rem solid ${({theme}) => theme.colors.neutral8};

    button {
        background: none;
        border: none;
        color: white;
    }

    .menuIcon {
        font-size: 2.4rem;
        color: ${({theme}) => theme.colors.neutral8};
        cursor: pointer;
    }

    .logoMenu {
        display: flex;
        align-items: center;
        gap: .4rem;
    }

    .logoMenu div {
        text-align: end;
    }

    h1 {
        font-size: 1.6rem;
    }

    h3 {
        font-size: 1.4rem;
        color: ${({theme}) => theme.colors.neutral8};
    }

    img {
        width: 5.2rem;
    }
`;