import { useCallback, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useUserContext } from "../../components/userContext";
import { postHTTP } from "../utils/api";
function NoteNew() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();
  const { user } = useUserContext();

  const handleChangeTitle = useCallback((e) => {
    setTitle(e.target.value);
  }, []);
  const handleChangeBody = useCallback((e) => {
    setBody(e.target.value);
  }, []);
  const handleSubmit = () => {
    if (!title || !body) {
      alert("enter title or body");
    } else {
      const note = {
        id: Date.now().toString(),
        userId: user.id,
        title: title,
        body: body,
        createDat: new Date().toLocaleDateString(),
      };
      postHTTP(`http://localhost:5000/notes`, note);
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
      <h1 className="text-xl text-center pb-4">Create new note</h1>
      <div className="flex flex-col gap-1 mt-1">
        <input
          className="bg-slate-200"
          placeholder="Title"
          value={title}
          onChange={handleChangeTitle}
        />
        <textarea
          className="bg-slate-200"
          placeholder="Body"
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

export default NoteNew;
