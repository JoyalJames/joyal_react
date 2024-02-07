import { useRouteError } from "react-router-dom"
const Error = ()=>{
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h2>Error Page SOLVE ITTTTTTT.....</h2>
            <h4>{err.status}</h4>
            <p>{err.statusText}</p>
        </div>
    )
}
export default Error