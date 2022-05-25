import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { PasswordInput } from "../../components/PasswordInput/PasswordInput";

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
      <Button marginTop="8" width="full" colorScheme="blue">
        Entrar
      </Button>
    </Box>
  );
}

export { LoginComponent };
