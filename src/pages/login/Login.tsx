import { LoginComponent } from "../../components/LoginComponent/LoginComponent";
import { Auth } from "../../layouts/auth/Auth";

function Login() {
  return (
    <Auth>
      <LoginComponent />
    </Auth>
  );
}

export { Login };
