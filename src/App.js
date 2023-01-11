import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routers/Layout";
import About from "./routers/About";
import Login from "./routers/Login";
import Error from "./routers/Error";
import Notes from "./routers/notes/Notes";
import NoteNew from "./routers/notes/NoteNew";
import NoteEdit from "./routers/notes/NoteEdit";
import NoteInfo from "./routers/notes/NoteInfo";
import UserContextProvider from "./components/userContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Register from "./routers/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),

    children: [
      {
        index: true,
        element: <About />,
      },

      {
        path: "*",
        element: <Error />,
      },
      {
        path: "/notes",
        element: <Notes />,
      },
      {
        path: "/notes/:id",

        element: <NoteInfo />,
      },
      {
        path: "/notes/:id/edit",

        element: <NoteEdit />,
      },

      {
        path: "/newNote",
        element: <NoteNew />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
export default function App() {
  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  );
}
