import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: 12px;
  right: 10px;
  color: #888;
  font-size: 18px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 12px 10px 36px; /* Espaço extra para o ícone */
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;

  padding-left: 42px;

  &:focus {
    border-color: #007bff;
  }
`;
