import React from 'react';

function CreateTodo() {
  return (
      <div className={"px-20 py-10"}>
        <form className={"flex flex-col w-7/12 gap-3"}>
          <div className={"flex flex-col "}>
            <label className={"font-semibold"} htmlFor="title">Title</label>
            <input className={"outline-none bg-blue-100 rounded-md py-1 px-3 text-sm"} type="text" id="title" name="title"/>
          </div>
          <div className={"flex flex-col "}>
            <label className={"font-semibold"} htmlFor="description">Description</label>
            <input className={"outline-none bg-blue-100 rounded-md py-1 px-3 text-sm"} type="text" id="description" name="description"/>
          </div>
          <div className={"flex flex-col "}>
            <label className={"font-semibold"} htmlFor="deadline">Deadline</label>
            <input className={"outline-none bg-blue-100 rounded-md py-1 px-3 text-sm"} type="datetime-local" id="deadline" name="deadline"/>
          </div>
          <div className={"flex flex-col"}>
            <label className={"font-semibold"} htmlFor="remind">Remind</label>
            <input className={"outline-none bg-blue-100 rounded-md py-1 px-3 text-sm"} type="datetime-local" id="remind" name="remind"/>
          </div>
          <button className={"w-fit my-5 bg-blue-400 text-white py-1 px-4 rounded"} type="submit">Create</button>
        </form>
      </div>
  );
}

export default CreateTodo;