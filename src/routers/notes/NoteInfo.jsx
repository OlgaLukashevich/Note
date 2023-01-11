import { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getHTTPData } from "../utils/api";

function NoteInfo() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { id } = useParams();
  useMemo(() => {
    getHTTPData(`http://localhost:5000/notes/${id}`).then((note) => {
      setBody(note.body);
      setTitle(note.title);
    });
  }, [id]);

  return (
    <div>
      <Link
        className="bg-slate-300 flex justify-center w-20 mb-5"
        to={`/notes`}
      >
        back
      </Link>
      <h1 className=" text-center text-xl pb-3">{title}</h1>
      <div className="flex flex-col gap-1">
        <div className="bg-slate-200 flex gap-1 mt-1 p-3">{body}</div>
      </div>
    </div>
  );
}

export default NoteInfo;
