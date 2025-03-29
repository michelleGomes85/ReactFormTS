# React TypeScript Form

## Introdução

Este é um projeto de um formulário simples desenvolvido com **React** e **TypeScript**, com o objetivo de praticar e aprimorar conhecimentos nessas tecnologias. As instruções fornecidas neste README são detalhadas para ajudar no entendimento de cada etapa do processo, permitindo um estudo mais aprofundado e servindo como referência para projetos futuros.

## Tecnologias Utilizadas

- [React](https://reactjs.org/) - Biblioteca para construção de interfaces de usuário.
- [TypeScript](https://www.typescriptlang.org/) - Superconjunto do JavaScript que adiciona tipagem estática.
- [Vite](https://vitejs.dev/) - Ferramenta para build e desenvolvimento rápido.
- [React Hook Form](https://react-hook-form.com/) - Gerenciamento de formulários de forma eficiente.
- [Yup](https://github.com/jquense/yup) - Biblioteca de validação de esquemas para JavaScript/TypeScript.
- [Styled Components](https://styled-components.com/) - Para estilização dos componentes.

## Como Criar o Projeto com Vite

1. **Criar o projeto com Vite:**
   ```sh
   npm create vite@latest my-react-ts-form --template react-ts
   ```
2. **Entrar na pasta do projeto:**
   ```sh
   cd my-react-ts-form
   ```
3. **Instalar as dependências:**
   ```sh
   npm install
   ```

## Configuração do Projeto

### Instalação das Bibliotecas Necessárias

```sh
npm install react-hook-form @hookform/resolvers yup styled-components
```

### Estrutura do Projeto

```
my-react-ts-form/
├── src/
│   ├── components/        # Componentes reutilizáveis
│   ├── pages/             # Páginas do projeto
│   ├── validations/       # Esquemas de validação com Yup
│   ├── styles/            # Estilos globais e componentes estilizados
│   ├── App.tsx            # Componente principal do projeto
│   ├── main.tsx           # Ponto de entrada do React
├── public/                # Arquivos estáticos
├── package.json           # Dependências e scripts
├── tsconfig.json          # Configuração do TypeScript
├── README.md              # Documentação do projeto
```

## Implementação do Formulário

O formulário utiliza **React Hook Form** para manipulação dos dados e **Yup** para validação.

### Validação com Yup

Criamos um schema de validação em `src/validations/loginValidation.ts`:

```ts
import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().email("Email inválido").required("Campo obrigatório"),
  password: yup.string().min(6, "Mínimo de 6 caracteres").required("Campo obrigatório"),
});
```

### Criando o Formulário em `Login.tsx`

```tsx
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../validations/loginValidation";
import { Button } from "../../components/Button";
import { InputField } from "../../components/Input";

const Login = () => {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onBlur",
  });

  const onSubmit = (data) => console.log("Dados enviados:", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField {...register("email")} placeholder="Email" />
      {errors.email && <p>{errors.email.message}</p>}
      
      <InputField {...register("password")} placeholder="Senha" type="password" />
      {errors.password && <p>{errors.password.message}</p>}
      
      <Button type="submit" disabled={!isValid}>Entrar</Button>
    </form>
  );
};

export default Login;
```

## Rodando o Projeto

Para iniciar o projeto em modo desenvolvimento, execute:

```sh
npm run dev
```

Acesse o projeto no navegador pelo link gerado no terminal (geralmente `http://localhost:5173`).

## Conclusão

Este projeto serve como base para estudo de **React com TypeScript**, focando no uso do **React Hook Form** para manipulação de formulários e **Yup** para validação. O uso de componentes reutilizáveis e estilização com Styled Components também contribui para a organização do projeto.

## 👩‍💻 Autora
Desenvolvido por **Michelle Gomes**

🔗 [GitHub - michelleGomes85](https://github.com/michelleGomes85)

Qualquer melhoria ou sugestão será bem-vinda! 🚀
