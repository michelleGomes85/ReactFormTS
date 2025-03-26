import React from "react";
import { ButtonContainer } from "./styles";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({ title, onClick, type = "button", disabled }) => {
  return (
    <ButtonContainer onClick={onClick} type={type} disabled={disabled}>
      {title}
    </ButtonContainer>
  );
};

export { Button };
