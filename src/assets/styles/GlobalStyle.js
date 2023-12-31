import styled, { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #efefef;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  input, button {
    outline: none;
    border: none;
    background-color: inherit;
  }
  img {
    object-fit: cover;
    
  }

`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const Input = styled.input`
  padding: 15px;
  outline: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  border: 1px solid #dedede;
  &[type='submit'] {
    border: 0px solid transparent;
    cursor: pointer;
    background-color: ${({ bg }) => (!bg ? '#aaaaaa' : bg)};
  }
`;

export const center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  font-weight: 700;
`;
