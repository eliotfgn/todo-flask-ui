import React, {useEffect, useState} from 'react';
import {getAll, Todo} from "../utils/http_utils";
import {Link} from "react-router-dom";

function Home() {
  const [todos, setTodos] = useState<Todo[]>();

  const init = async () => {
    let data = await getAll();
    setTodos(data);
  };

  useEffect(() => {
    init().then(r => {});
  }, []);


  return (
      <div className={"py-5 flex flex-col"}>
        <Link to={"new"}>
          <button className={"my-5 py-2 px-4 bg-blue-400 rounded-md text-white self-end mx-10"}>New task</button>
        </Link>
        <div className="grid grid-cols-2 md:grid-cols-4 mx-auto w-9/12 justify-around items-center gap-x-8 gap-y-4">
          {todos?.map((todo, index) => (
              <Link key={index} to={todo.id.toString()}>
                <div className={` rounded-md bg-red-300 p-4`}>
                  <h1 className={"font-bold"}>{todo.title}</h1>
                  <p className={"text-sm"}>{todo.description}</p>
                </div>
              </Link>
          ))}
        </div>
      </div>
  );
}

export default Home;