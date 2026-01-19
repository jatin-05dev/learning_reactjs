import C2 from "./C2"

function C1({data}){
    return(
        <>

        <h1>
            hello iam child one and this is my details
        </h1>

        <h1>details ={data.name}</h1>
        <C2 data={data} />



        </>
    )
}

export default C1