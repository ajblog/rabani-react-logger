import { useEffect } from "react";
import "./App.css";
import { useLogger, LogInitialValues } from "./lib/index";

function App() {
  const [state, dispatch] = useLogger();
  useEffect(() => {
    console.log("THIS IS STATE", state);
  }, []);
  useEffect(() => {
    dispatch({ type: "ERROR", payload: LogInitialValues });
  }, []);
  return (
    <div className="App">
      <h2>Testing man</h2>
    </div>
  );
}

export default App;
