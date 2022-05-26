import { LoginComponent } from "../../components/LoginForm/LoginForm";
import { Auth } from "../../layouts/auth/Auth";

function Login() {
  return (
    <Auth>
      <LoginComponent />
    </Auth>
  );
}

export { Login };
