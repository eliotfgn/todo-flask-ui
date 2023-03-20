import React, {useEffect, useState} from 'react';
import {Link, useLoaderData, useParams} from "react-router-dom";
import {getById, Todo} from "../utils/http_utils";

function TodoDetails() {
  const [todo, setTodo] = useState<Todo>();
  const {id} = useParams();

  const init = async () => {
    console.log(id)
    if (typeof id === "string") {
      let data = await getById(parseInt(id));
      setTodo(data);
    }
  }

  useEffect(() => {
    init().then(r => {});
  }, []);

  return (
      <div>
        <Link to={"/todos"} className={"my-3 mx-10"}>Back</Link>
        <div className={"mx-auto rounded-md mt-10 px-4 py-2 w-2/5 bg-yellow-100"}>

          <h1 className={"font-medium text-lg"}>{todo?.title}</h1>
          <p className={"text-sm my-3"}>{todo?.description}</p>
          <p className={"text-sm"}><span className={"font-medium"}>Deadline: </span> {todo?.deadline.toString()}</p>
        </div>
      </div>
  );
}

export default TodoDetails;
