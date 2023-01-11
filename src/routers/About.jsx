import { useUserContext } from "../components/userContext";
import { Link } from "react-router-dom";

export default function About() {
  const { user } = useUserContext();

  return (
    <div className="p-7">
      <h1 className="text-xl text-center font-medium">About me</h1>
      <div className="text-center p-7">
        <p>email: {user.email}</p>
        <p>Date sign up: {user.date} </p>
      </div>
      <div className="flex justify-center">
        <Link className="flex justify-center bg-slate-300 w-40" to="/notes">
          {" "}
          Go to notes
        </Link>
      </div>
    </div>
  );
}
