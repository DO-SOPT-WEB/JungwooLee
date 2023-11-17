import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  background-color: lightgray;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 30rem;
  padding: 3rem 3rem 2rem 3rem;

  border-radius: 0.5rem;
  background-color: white;
`;

export const ModalTitle = styled.h1`
  margin-bottom: 1rem;

  font-size: 2rem;
  font-weight: 700;
`;

export const InputBox = styled.input`
  width: 75%;
  height: 2.2rem;

  &::placeholder {
    padding-left: 0.3rem;
  }
`;

export const InputOptionText = styled.p`
  width: 5rem;

  font-weight: 600;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  margin-top: 1rem;
`;

export const Button = styled.button`
  width: 100%;
  height: 2.2rem;
  margin-top: 2rem;

  border: none;
  border-radius: 0.2rem;
  background-color: black;

  color: white;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    background-color: lightgray;
  }
`;
