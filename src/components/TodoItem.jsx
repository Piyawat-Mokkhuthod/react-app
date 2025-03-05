import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { CiEdit, CiCircleRemove } from "react-icons/ci";

function TodoItem(props) {
  const dialog = useRef();
  const [title, setTitle] = useState(props.todo.title);
  const [editing, setEditing] = useState(false);

  const openModal = (isEditing) => {
    console.log(isEditing);
    setEditing(isEditing);
    dialog.current.showModal();
  };
  const clickOutsideModal = (e) => {
    if (e.target === dialog.current) {
      dialog.current.close();
    }
  };
  const submitForm = (e) => {
    e.preventDefault(); //ป้องกันการ reload หน้าเว็บ

    if (editing) {
      const task = {
        title: title,
        date: props.todo.date,
      };
      console.log(task);
      props.editTask(props.id, task);

    } else {
      props.deleteTask(props.id);
    }

    closeModal();
  };
  // กดข้างนอกแล้วปิด
  const closeModal = () => {
    dialog.current.close();
  };

  return (
    <>
      <li className="flex bg-white rounded shadow-sm p-4 mt-4 first:mt-0 hover:bg-gray-100 hover:cursor-pointer">
        <div className="flex gap-x-4 mr-auto items-center">
          <div className="size-6 rounded-full shadow-sm text-white text-sm bg-teal-400 text-center content-center">
            {props.id + 1}
          </div>
          <div>
            <p className="font-semibold">{props.todo.title}</p>
            <p className=" text-sm text-gray-400 ">{props.todo.date}</p>
          </div>
        </div>
        <div className=" flex items-center gap-x-2">
          <button
            onClick={() => openModal(true)}
            type="button "
            className="todo-btn"
          >
            <CiEdit className=" size-6" />
          </button>
          <button
            onClick={() => openModal(false)}
            type=" button "
            className="todo-btn"
          >
            <CiCircleRemove className=" size-6" />
          </button>
        </div>
      </li>
      <dialog
        ref={dialog}
        onClick={clickOutsideModal}
        className=" rounded-md w-[480px] m-auto "
      >
        <form onSubmit={submitForm} className="p-6">
          <h3 className="font-semibold text-xl">
            {editing ? "Edit Task" : "Do you want to delete this task"}
          </h3>
          <div>
            {editing ? (
              <input
                type="text"
                className=" focus:outline-none w-full border rounded-sm"
                maxLength={30}
                placeholder={props.todo.title}
                autoFocus
                required
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            ) : (
              "This will permanently delete this task"
            )}
          </div>
          <div className=" mt-2 text-end space-x-2 ">
            <button
              onClick={closeModal}
              type="button"
              className=" border-gray-200 border rounded px-5 py-2 hover:bg-gray-50 "
            >
              Close
            </button>
            <button
              type="submit"
              className={
                editing
                  ? "rounded bg-teal-500 px-3 py-2 text-white hover:bg-teal-600"
                  : "rounded bg-red-500 px-3 py-2 text-white hover:bg-red-600"
              }
            >
              {editing ? "Confirm" : "Delete"}
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
}
TodoItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,

  id: PropTypes.number,
  deleteTask: PropTypes.func,
  editTask: PropTypes.func,
};

export default TodoItem;
