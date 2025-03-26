import React from 'react';
import { Input, InputWrapper, InputContainer, IconWrapper } from './styles';

import { InputProps } from './types';

const InputField: React.FC<InputProps> = ({ type = 'text', icon, ...props }) => {
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
