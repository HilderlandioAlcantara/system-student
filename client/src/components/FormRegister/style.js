import styled from "styled-components";

export const Container = styled.div `
    border: .2rem solid ${({theme}) => theme.colors.neutralD};
    background: #F5F5F588;
    border-radius: .8rem;
    padding: 1.2rem;

    section {
        margin-top: 1.6rem;
    }

    label {
        font-size: 1.2rem;
        line-height: 2.4rem
    }
    
    input {
        padding: .2rem .8rem;
        width: 100%;
        border: .1rem solid ${({theme}) => theme.colors.neutralB};
    }

    input:focus {
        outline: .1rem solid orange;
        border: .1rem solid orange;
        padding: .2rem .8rem;
        width: 100%;
    }

    .error {
        color: red;
        display: block;
        position: absolute;
        font-size: 1.0rem;
        margin-top: .2rem;
    }

    button {
        width: 100%;
        margin-top: 3.2rem;
        border: none;
        background: #008080;
        color: white;
        border-radius: .4rem;
        padding: .4rem;
        font-size: 1.4rem;
    }

    button:hover{
        background: #007070;
        cursor: pointer;
    }
`;