 import Second from "./Second"

function First() {
    let obj = {
        name: 'jatin'
    }

    return (
        <>
            <Second data={obj.name} />
        </>
    )
}

export default First
