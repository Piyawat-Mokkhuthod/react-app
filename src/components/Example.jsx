import Header from "./Header.jsx";
import Toggle from "./Toggle.jsx";
import ShowStudents from "./ShowStudents.jsx";
import ClickCount from "./ClickCount.jsx";

function Example() {
  const students = [
    {
      firstName: "Piyawat",
      lastName: "Mokkhunthod",
      id: 643040532 - 3,
    },

    {
      firstName: "Gorge",
      lastName: "White",
      id: 643040532 - 0,
    },

    {
      firstName: "Peach",
      lastName: "Peyta",
      id: 643040534 - 0,
    },
  ];
  return (
    <>
      <Header />
      <Toggle />

      {students.map((student, index) => (
        <ShowStudents
          key={index}
          id={student.id}
          firstName={student.firstName}
          lastName={student.lastName}
        />
      ))}

      <ClickCount />
    </>
  );
}

export default Example;
