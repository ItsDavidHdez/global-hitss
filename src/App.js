import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const registerState = useSelector((state) => state.register);
  console.log(registerState);
  return (
    <div className="App">
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
