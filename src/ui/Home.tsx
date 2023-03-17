import React, {useEffect, useState} from 'react';
import {getAll, Todo} from "../utils/http_utils";

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
      <div className="grid grid-cols-2 md:grid-cols-4 mx-auto w-9/12 justify-around items-center gap-x-8 gap-y-4">
        { todos?.map((todo, index) => (
            <div key={index} className={` rounded-md bg-red-300 p-4`}>
              <h1 className={"font-bold"}>{todo.title}</h1>
              <p className={"text-sm"}>{todo.description}</p>
            </div>
        )) }
      </div>
  );
}

export default Home;