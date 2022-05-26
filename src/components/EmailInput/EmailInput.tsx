import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const EmailInput = () => {
  return (
    <FormControl>
      <FormLabel htmlFor="email">Email address</FormLabel>
      <Input id="email" type="email" />
    </FormControl>
  );
};

export { EmailInput };
