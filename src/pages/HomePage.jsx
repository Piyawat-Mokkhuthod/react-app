import NewTask from "../components/NewTask";
import { useEffect, useState } from "react";
import TodoItem from "../components/TodoItem";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";
function HomePage() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [users,setusers]=useState([])
  function delay() {
    return new Promise((resolve) => setTimeout(resolve, 3000));
  }

  const addTask = async (task) => {
    setLoading(true);
    setTodos([...todos, task]);
    await delay();
    setLoading(false);
    toast.success("Task added successfully!");
  };
  const deleteTask = (id) => {
    setTodos(todos.filter((todo, index) => index !== id)); // set ค่า todos ใหม่โดยยกเว้นค่าที่ตรงกับไอดี
    toast.success("Task deleted successfully!");
  };

  useEffect(() => {
    console.log("start");
    const getData = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/"
        );
        const data = await response.json();
        setusers(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const editTask = (id, newTask) => {
    const updatedTodos = [...todos];
    updatedTodos[id] = newTask;
    setTodos(updatedTodos);
    toast.success("Task edited successfully!");
  };

  return (
    <>
    
      <div className="grid-col-1 space-y-8">
        <NewTask addTask={addTask} />

        {loading ? (
          <div className="flex justify-center">
            <Spinner loading={loading} className="mx-2" />
          </div>
        ) : todos.length === 0 ? (
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
