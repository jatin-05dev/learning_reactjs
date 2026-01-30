import { useState } from "react"
function Counter() {
    let [num, setnum] = useState(0);
    return (
        <>

            <h1>hello i am counter page</h1>

            <p>{num}</p>
            <button onClick={() => setnum(prev => prev + 1)}>+</button>

            <button onClick={() => setnum(prev => (prev > 0 ? prev - 1 : 0))}>
                -
            </button>


        </>
    )

}
export default Counter
