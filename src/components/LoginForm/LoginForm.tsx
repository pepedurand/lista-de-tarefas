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

function LoginComponent() {
  return (
    <Box textAlign="center">
      <Heading>Lista de Tarefas</Heading>
      <Text color="grey" fontWeight="light">
        Seja mais produtivo com a lista de tarefas online, totalmente gratuito.
      </Text>
      <FormControl marginTop="8">
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input id="email" type="email" />
      </FormControl>
      <PasswordInput />
      <Button marginTop="8" marginBottom="4" width="full" colorScheme="blue">
        Entrar
      </Button>
      <Link to="/signup"> Não tem uma conta? Cadastre-se.</Link>
    </Box>
  );
}

export { LoginComponent };
