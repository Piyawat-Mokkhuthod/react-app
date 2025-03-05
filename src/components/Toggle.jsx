import { useState } from "react";

function Toggle() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <p>{show.toString()}</p>
      {show ? <p> show </p> : <p>hide</p>}
      <button
        className="text-red-500"
        type="button"
        onClick={() => setShow(!show)}
      >
        {" "}
        click Me!
      </button>
    </div>
  );
}

export default Toggle;
