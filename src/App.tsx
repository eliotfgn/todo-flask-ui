import {createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider} from "react-router-dom";
import Home from "./ui/Home";
import TodoDetails from "./ui/TodoDetails";
import CreateTodo from "./ui/CreateTodo";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/todos",
      element: <Home/>
    },
    {
      path: "/todos/:id",
      element: <TodoDetails/>
    },
    {
      path: "/todos/new",
      element: <CreateTodo/>
    }
  ]);

  return (
    <div className="font-poppins">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  )
}

export default App
