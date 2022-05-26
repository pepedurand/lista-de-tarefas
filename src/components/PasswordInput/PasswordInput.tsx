import {
  InputGroup,
  InputRightElement,
  Button,
  Input,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";
import React from "react";

interface PasswordInputProps {
  label: string;
  texto?: string;
}

function PasswordInput({ label, texto }: PasswordInputProps) {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <FormControl marginTop="4">
      <FormLabel htmlFor="password">{label}</FormLabel>
      <InputGroup size="md">
        {texto}
        <Input
          pr="4.5rem"
          type={show ? "text" : "password"}
          placeholder="Enter password"
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
}

export { PasswordInput };
