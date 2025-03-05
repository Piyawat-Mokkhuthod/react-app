import { useRef } from "react";
import PropTypes from 'prop-types';

const NewTask = ({ addTask }) => {
//   const [title, setTitle] = useState("");ทำให้ Component รีเรนเดอร์ใหม่ ฟังก์ชัน setState() ใช้เปลี่ยนค่า

const title = useRef() //ไม่ทำให้ Component รีเรนเดอร์ .current ใช้ในการเข้าถึงค่า
const form = useRef()

const submitForm = (e)=>{
    e.preventDefault();
    console.log(title);
    const task = {
        title: title.current.value,
        date:new Date().toLocaleString()
    }
    addTask(task)// ส่งค่าย้อนกลับไปที่home

    form.current.reset()
}
  return (
    <form ref={form} onSubmit={submitForm}>
      <label htmlFor="title" className=" text-lg text-gray-400">
        Add New Task
      </label>
      <div className="flex gap-x-2 bg-white rounded-md shadow-sm p-2 pl-3 mt-2">
        <input
          type="text"
          id="title"
          className=" focus:outline-none w-full"
          maxLength={30}
          placeholder=" Type something here ..."
          autoFocus
          required
          ref={title}
        />

        <button
          type="submit"
          className=" w-40 px-4 py-3 rounded font-semibold bg-blue-500 text-white hover:bg-blue-600"
        >
          + New Task
        </button>
      </div>
    </form>
  );
};
NewTask.propTypes = {
  addTask: PropTypes.func,
};

export default NewTask;
