import { Link } from "react-router-dom";
export default function Error() {
  return (
    <div className="flex flex-col   text-center gap-1 p-7">
      <h1 className="text-xl  font-medium">404</h1>
      <h2>Page not found</h2>
      <div className="flex  justify-center pt-5 ">
        <Link className="bg-slate-300 w-40" to={`/`}>
          Go to Main
        </Link>
      </div>
    </div>
  );
}
