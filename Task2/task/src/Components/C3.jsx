import C4 from "./C4"
function C3({data}){
    return(
        <>

        <h1>hello i am child 3 and the data = {data.salary}</h1>
        <C4 data={data}/>



        </>
    )
}

export default C3