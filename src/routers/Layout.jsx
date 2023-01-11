import { Outlet, NavLink } from "react-router-dom";
import { useUserContext } from "../components/userContext";
export default function Layout() {
  const user = useUserContext();

  const handleLogout = () => {
    user.setUser({ email: "" });
  };
  const arrayUser = [user];
  return (
    <div className="p-7">
      <header className="bg-slate-300 flex gap-5 justify-center mb-5">
        <p>Hello, {arrayUser[0].user.name} </p>
        <NavLink
          to="/"
          end={true}
          className={({ isActive }) => (isActive ? "text-slate-600" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/notes"
          className={({ isActive }) => (isActive ? "text-slate-600" : "")}
        >
          Notes
        </NavLink>
        <button
          onClick={handleLogout}
          className="text-red-500  hover:text-red-400"
        >
          Log out
        </button>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div className="flex gap-5 justify-center mb-5 pt-3">
          <span>Createb by: Lykashevich O</span>
          <span>BSU: 2022</span>
        </div>
      </footer>
    </div>
  );
}
