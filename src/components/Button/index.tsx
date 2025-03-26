import React from "react";
import { ButtonContainer } from "./styles";

type ButtonProps = {
  title: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
  return <ButtonContainer onClick={onClick}>{title}</ButtonContainer>;
};

export { Button };
