import { useEffect } from "react";
import { useCallback, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useUserContext } from "../components/userContext";
import { getHTTPData } from "./utils/api";

function Login() {
  const userContext = useUserContext();

  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSetEmail = useCallback((e) => setEmail(e.target.value), []);

  const [password, SetPassword] = useState("");

  const handleSetPassword = useCallback((e) => SetPassword(e.target.value), []);

  const handleLogin = useCallback(() => {
    getHTTPData(
      `http://localhost:5000/users?email=${email}&password=${password}`
    ).then((users) => {
      if (users.length === 1) {
        userContext.setUser(users[0]);
        setTimeout(() => {
          navigate("/");
        }, 200);
      } else {
        alert("Enter login, password");
      }
    });
  }, [email, navigate, password, userContext]);

  useEffect(() => {
    if (userContext.user?.email) {
      navigate("/");
    }
  }, [navigate, userContext.user]);

  return (
    <div className=" p-7">
      <div className="flex flex-col justify-center gap-1 p-7">
        <h1 className="text-xl text-center font-medium pb-7">Log in</h1>
        <input
          className="bg-slate-200"
          placeholder="email"
          value={email}
          onChange={handleSetEmail}
        />
        <input
          className="bg-slate-200"
          placeholder="password"
          type="password"
          value={password}
          onChange={handleSetPassword}
        />
        <div className="flex  justify-center pt-5 ">
          <button className="bg-green-400 w-40 p-2" onClick={handleLogin}>
            Log in
          </button>
        </div>
        <div className=" flex-row justify-center gap-5">
          <span>Don't have an account?</span>
          <Link className="bg-slate-300 w-40 p-1" to="/register">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Login;
