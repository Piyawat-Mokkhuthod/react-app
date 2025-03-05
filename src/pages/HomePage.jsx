import NewTask from "../components/NewTask";
import { useState } from "react";
import TodoItem from "../components/TodoItem";
import Spinner from "../components/Spinner";

function HomePage() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  function delay() {
    return new Promise((resolve) => setTimeout(resolve, 300));
  }

  const addTask = async (task) => {
    setLoading(true);
    setTodos([...todos, task]);
    await delay();
    setLoading(false);
  };
  const deleteTask = (id) => {
    setTodos(todos.filter((todo, index) => index !== id)); // set ค่า todos ใหม่โดยยกเว้นค่าที่ตรงกับไอดี
  };

  const editTask = (id, newTask) => {
    const updatedTodos = [...todos];
    updatedTodos[id] = newTask;
    setTodos(updatedTodos);
  };

  return (
    <>
      <div className="grid-col-1 space-y-8">
        {/* {loading? (
          <Spinner loading={loading} />
        ) : } */}
        <NewTask addTask={addTask} />
        {todos.length === 0 ? (
          <p className=" font-bold text-center">
            No tasks available. Add a new task!
          </p>
        ) : (
          <ul className=" bg-gray-200 rounded-lg shadow-sm mt-4 p-4">
            {todos.map((todo, index) => (
              <TodoItem
                key={index}
                id={index}
                todo={todo}
                deleteTask={deleteTask}
                editTask={editTask}
              />
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default HomePage;
