import { FaUser, FaLock } from "react-icons/fa";
import { InputField } from "../../components/Input";
import { Button } from "../../components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../validations/loginValidation";
import { FormWrapper, Spacing, Title, ErrorText } from "./styles";

type LoginFormData = {
  email: string;
  password: string;
};

const Login = () => {

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormData>({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log("Dados enviados:", data);
  };

  return (
    <FormWrapper>

      <Title>Login</Title>
      <Spacing />

      <form onSubmit={handleSubmit(onSubmit)}>

        <InputField
          icon={<FaUser />}
          placeholder="Email"
          type="email"
          {...register("email")}
        />
        {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
        <Spacing />

        <InputField
          icon={<FaLock />}
          placeholder="Senha"
          type="password"
          {...register("password")}
        />

        {errors.password && <ErrorText>{errors.password.message}</ErrorText>}

        <Spacing />

        <Button title="Entrar" type="submit" disabled={!isValid} />
      </form>
    </FormWrapper>
  );
};

export default Login;
