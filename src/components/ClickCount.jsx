import { useState } from "react"

function ClickCount() {

    const [count, setCount] = useState(0)
    function increment() {
        setCount(count + 1)
        console.log(count)
    }
    return (
        <div className="class">
            <p>{count}</p>
            <button onClick={increment} type="button"> Increment Button </button>
        </div>
    )
}

export default ClickCount