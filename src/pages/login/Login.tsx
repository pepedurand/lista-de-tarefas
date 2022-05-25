import { Box } from "@chakra-ui/react";
import { EmailInput } from "../../components/EmailInput/EmailInput";
import { PasswordInput } from "../../components/PasswordInput/PasswordInput";

function Login() {
  return (
    <div>
      <Box>
        <EmailInput />
        <PasswordInput />
      </Box>
    </div>
  );
}

export { Login };
