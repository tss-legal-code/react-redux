import { useSelector , useDispatch} from "react-redux"
import {increment, decrement} from "./actions"

function App() {

  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()

  return (
    <div className="container pt-3">
      <h1>Counter: {counter}</h1>
      <button 
        className="btn btn-outline-danger btn-lg"
        onClick={() => dispatch(decrement())}> -1 </button>
      <button 
        className="btn btn-outline-success btn-lg"
        onClick={() => dispatch(increment(5))}> +5 </button>
      
      {isLogged ? <h3>Valuable information for logged in</h3> : ""}

    </div>
  );
}

export default App;
