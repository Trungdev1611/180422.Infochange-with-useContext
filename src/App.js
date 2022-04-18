import Showinfo from "./Showinfo/Showinfo";
import Edit from "./Edit/Edit";
import { useContext } from "react";
import "./Edit/Edit.css"
import { Context } from './Context/Context';
function App() {
  const getcontext = useContext(Context)
  let { isEdit } = getcontext.datastate

  return (
    <div className="App">
      {isEdit ? <Edit /> : <Showinfo />}
    </div>
  );
}

export default App;
