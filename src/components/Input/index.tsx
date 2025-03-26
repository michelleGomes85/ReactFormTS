import React from 'react';
import { Input, InputWrapper, InputContainer, IconWrapper } from './styles';

type Props = {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: React.ReactNode;
};

const InputField: React.FC<Props> = ({ type = 'text', icon, ...props }) => {
  return (
    <InputWrapper>
      <InputContainer>
        <IconWrapper>{icon}</IconWrapper>
        <Input type={type} placeholder={props.placeholder} {...props} />
      </InputContainer>
    </InputWrapper>
  );
};

export { InputField };
