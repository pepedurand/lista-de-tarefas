import {
  InputGroup,
  InputRightElement,
  Button,
  Input,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";
import React from "react";

function PasswordInput() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <FormControl marginTop="4">
      <FormLabel htmlFor="password">Password</FormLabel>
      <InputGroup size="md">
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
