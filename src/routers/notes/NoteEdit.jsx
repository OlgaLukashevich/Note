import { useCallback, useMemo, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { patchHTTP, getHTTPData } from "../utils/api";
function NoteEdit() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { id } = useParams();
  useMemo(() => {
    getHTTPData(`http://localhost:5000/notes/${id}`).then((note) => {
      setBody(note.body);
      setTitle(note.title);
    });
  }, [id]);

  const navigate = useNavigate();

  const handleChangeTitle = useCallback((e) => {
    setTitle(e.target.value);
  }, []);
  const handleChangeBody = useCallback((e) => {
    setBody(e.target.value);
  }, []);

  const handleSubmit = () => {
    if (!title.trim() || !body.trim()) {
      alert("enter title or body");
    } else {
      const note = {
        title: title,
        body: body,
        date: new Date().toLocaleDateString(),
      };
      patchHTTP(`http://localhost:5000/notes/${id}`, note);
      navigate("/notes");
    }
  };

  return (
    <div>
      <Link
        className="bg-slate-300 flex justify-center w-20 mb-5"
        to={`/notes`}
      >
        back
      </Link>
      <h1 className=" text-center text-xl">Edit</h1>
      <div className="flex flex-col gap-1">
        <input
          className="bg-slate-200"
          value={title}
          onChange={handleChangeTitle}
        />
        <textarea
          className="bg-slate-200 "
          value={body}
          onChange={handleChangeBody}
        />
      </div>
      <div className="flex justify-center pb-8">
        <button className="bg-slate-300  w-40 mt-5 " onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
  );
}

export default NoteEdit;
