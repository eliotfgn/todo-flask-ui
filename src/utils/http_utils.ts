const BASE_URL = "http://127.0.0.1:5000/api/v1"

export interface Todo {
  id: number;
  title: string;
  description: string;
  deadline: Date;
  remind: Date;
  createdAt: Date;
  updatedAt: Date;

}

export async function getAll(): Promise<Todo[]> {
  let res = await fetch(`${BASE_URL}/todos/`);
  return await res.json();
}

export async function getById(id: number): Promise<Todo> {
  let res = await fetch(`${BASE_URL}/todos/${id}`);
  return await res.json();
}