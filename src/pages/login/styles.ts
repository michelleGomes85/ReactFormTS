import styled from "styled-components";

export const FormWrapper = styled.div`
  max-width: 500px;
  margin: 40px auto;
  padding: 70px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 480px) {
    max-width: 95%;
    box-shadow: none;
    background: white;
  }
`;

export const Spacing = styled.span`
  display: block;
  margin: 20px;
`;

export const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: bold;
`;

export const ErrorText = styled.span`
  color: red;
`