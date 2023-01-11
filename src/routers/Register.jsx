import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCallback } from "react";
import { postHTTP } from "../routers/utils/api";
export default function Register() {
  const navigate = useNavigate();

  const [Name, setName] = useState("");
  const handleSetName = useCallback((e) => setName(e.target.value), []);

  const [email, setEmail] = useState("");
  const handleSetEmail = useCallback((e) => setEmail(e.target.value), []);

  const [password, SetPassword] = useState("");
  const handleSetPassword = useCallback((e) => SetPassword(e.target.value), []);

  const [repPassword, SetRepPassword] = useState("");
  const handleSetRepPassword = useCallback(
    (e) => SetRepPassword(e.target.value),
    []
  );

  const setData = () => {
    SetPassword("");
    setEmail("");
    SetRepPassword("");
    setName("");
  };
  const handleRegister = () => {
    const user = {
      id: Date.now().toString(),
      email: email,
      password: password,
      name: Name,
      date: new Date().toLocaleDateString(),
    };

    if (!email || !Name || !password || !repPassword) {
      return setData();
    }
    if (repPassword === password) {
      postHTTP("http://localhost:5000/users", user);
      navigate("/login");
    } else {
      alert("enter all info");
      setData();
    }
  };
  return (
    <div className=" p-7">
      <div className="flex flex-col justify-center gap-1 p-7">
        <div>
          <Link className="bg-slate-300 w-20 mb-5" to={`/login`}>
            Back
          </Link>
          <h1 className="text-xl text-center font-medium pb-7">Sign up</h1>
        </div>
        <input
          className="bg-slate-200"
          placeholder="name"
          value={Name}
          onChange={handleSetName}
        />
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
        />{" "}
        <input
          className="bg-slate-200 "
          placeholder="repeat password"
          type="password"
          value={repPassword}
          onChange={handleSetRepPassword}
        />
        <div className="flex  justify-center pt-5 ">
          <button className="bg-slate-300 w-40" onClick={handleRegister}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
