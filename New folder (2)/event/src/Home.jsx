 import { useState } from "react"

function Home() {
    let [num, setNum1] = useState(10)
    let [num2, setNUM2] = useState(0)

    function demo() {
        setNum(5)
    }

    function inc() {
        setNUM2(num2+1)
    }
    function dec() {
        setNUM2(num2-1)
    }

    return (
        <>
            <h1>home page - {num}</h1>
            <button onClick={demo}>change to 5</button>
            <button onClick={() => setNum(20)}>change to 20</button>

            <hr />

            <h1>{num2}</h1>
            {/* <button onClick={() => setNUM(num2 + 1)}>+</button>
            <button onClick={() => setNUM(num2 - 1)}>-</button> */}

             <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
        </>
    )
}

export default Home
