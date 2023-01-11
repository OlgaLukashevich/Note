import { useUserContext } from "../../components/userContext";
import { Link, Await } from "react-router-dom";
import { Suspense } from "react";
import Note from "../../components/Note";
import { getHTTPData } from "../utils/api";

function notesLoader(userId) {
  const notesPromise = getHTTPData(
    `http://localhost:5000/notes?userId=${userId}`
  );
  return { notesPromise };
}

function Notes() {
  const { user } = useUserContext();
  const { notesPromise } = notesLoader(user.id);

  return (
    <div>
      <h1 className="text-xl text-center pb-4">Notes</h1>

      <div className=" justify-center  pb-5">
        <div className="flex justify-center">
          <Link className="bg-slate-300 text-center w-40 mb-5" to={`/newNote`}>
            Add new Note
          </Link>
        </div>

        <Suspense fallback={<div>Loading..</div>}>
          <Await resolve={notesPromise}>
            {(notes) =>
              notes.map((note) => (
                <Note
                  key={note.id}
                  id={note.id}
                  title={note.title}
                  body={note.body}
                  date={note.createDat}
                />
              ))
            }
          </Await>
        </Suspense>
      </div>
    </div>
  );
}

export default Notes;
