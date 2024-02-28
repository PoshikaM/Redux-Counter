import Actions from "./Actions";
import { useDispatch, useSelector } from "react-redux"

function LikeCounter(){
    const count = useSelector( (state) => {
        return state
    })

    const dispatch = useDispatch()

    return(
        <div className="flex">
            <div>
            <h1>{count}</h1>
            <button onClick={() => {dispatch(Actions.Increment())}}>Like</button>
            <button onClick={() => {dispatch(Actions.Decrement())}}>Unlike</button>
            </div>
        </div>
    )
}

export default LikeCounter;