
import { FaUser, FaLock } from "react-icons/fa";
import { InputField } from "../../components/Input";
import { Button } from "../../components/Button";

import { FormWrapper, Spacing, Title } from "./styles";

const Login = () => {

  return (
    <FormWrapper>
      <Title>Login</Title>
      <Spacing />
      <form>
        <InputField icon={<FaUser />} placeholder="Nome"/>
        <Spacing />
        <InputField icon={<FaLock />} placeholder="Senha"/>
        <Spacing />
        <Button title="Entrar" />
      </form>
    </FormWrapper>
  );
};

export default Login;
