import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PasswordInput } from "../PasswordInput/PasswordInput";

const SignUpForm = () => {
  return (
    <Box textAlign="center">
      <Heading>Cadastre-se</Heading>
      <Text color="grey" fontWeight="light">
        Cadastre-se na Lista de Tarefas para ter acesso as suas tarefas.
      </Text>
      <FormControl marginTop="8">
        <FormLabel htmlFor="name">Nome</FormLabel>
        <Input id="name" type="name" />
      </FormControl>
      <FormControl marginTop="4">
        <FormLabel htmlFor="name">Email</FormLabel>
        <Input id="email" type="email" />
      </FormControl>
      <FormControl marginTop="4">
        <FormLabel htmlFor="date">Data de Nascimento</FormLabel>
        <Input id="date" type="date" />
      </FormControl>
      <PasswordInput texto="teste" label="Senha" />
      <PasswordInput label="Confirme sua senha" />
      <Button marginTop="8" marginBottom="4" width="full" colorScheme="blue">
        Cadastrar
      </Button>
      <Link to="/login">Já tem uma conta? Faça o login.</Link>
    </Box>
  );
};

export { SignUpForm };
