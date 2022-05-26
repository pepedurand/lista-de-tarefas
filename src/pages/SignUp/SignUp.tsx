import { SignUpForm } from "../../components/SignUpForm/SignUpForm";
import { Auth } from "../../layouts/auth/Auth";

function SignUp() {
  return (
    <Auth>
      <SignUpForm />
    </Auth>
  );
}

export { SignUp };
