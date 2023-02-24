import { changeName } from "./Redux/mydataSlice";
import "./App.css";
import { useSelector, useDispatch } from 'react-redux'

function App() {
  // @ts-ignore
  const {myName,  myAge} = useSelector((state) => state.counter)
  const dispatch = useDispatch()



  return (
    <div className="App">
      <h2> {myName} is {myAge} years old     </h2>
      <button onClick={() => {
        dispatch(changeName())
      }}>Change Name</button>
      <br />
      <br />
      <button onClick={() => {}}>Change Age</button>
    </div>
  );
}

export default App;

{
  /* <br />
<br />
<br />

<h1>{counter} </h1>

<button
  onClick={() => {
   
  }}
>
  increase by 10
</button> */
}
