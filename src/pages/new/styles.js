import styled from 'styled-components';

export const FormWrapper = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

export const FormHeader = styled.h1`
    text-align: center;

    @media(max-width: 800px){
        color: blue;
    }
`;
