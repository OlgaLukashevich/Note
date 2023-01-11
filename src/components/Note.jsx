import edit from "../routers/notes/edit.png";
import del from "../routers/notes/delete.png";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { deleteHTTP } from "../routers/utils/api";
function Note(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/notes/${props.id}`);
  };

  const handleDelete = useCallback(() => {
    deleteHTTP(`http://localhost:5000/notes/${props.id}`);
    navigate("/notes");
  }, [navigate, props.id]);

  const handleEdit = () => {
    navigate(`/notes/${props.id}/edit`);
  };

  return (
    <div className="flex flex-row bg-slate-200 justify-between mt-1 pl-3 ">
      <div onClick={handleClick}>
        <div className="flex gap-1 mt-1">
          <h2>{props.title}</h2>
          <span className=" text-slate-400">{props.date}</span>
        </div>
      </div>
      <div className="flex flex-row gap-1 mt-1 p-2">
        <button onClick={handleDelete}>
          {" "}
          <img className="w-5" alt="D" src={del} />
        </button>
        <button onClick={handleEdit}>
          <img className="w-5" alt="E" src={edit} />
        </button>
      </div>
    </div>
  );
}

export default Note;
