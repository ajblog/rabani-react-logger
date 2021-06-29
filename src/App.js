import React, { useEffect } from "react";
import "./App.css";
import { ErrorBoundaryHoc } from "./lib/index";

class App extends React.Component {
  // const [state, dispatch] = useLogger();
  // useEffect(() => {
  //   console.log("THIS IS STATE", state);
  // }, [state]);
  // useEffect(() => {
  //   dispatch({ type: "ERROR", payload: LogInitialValues });
  // }, []);

  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      error: "",
    };
  }
  componentDidUpdate() {
    console.log(this.state.counter);
  }

  render() {
    // if (this.state.error.length) {
    //   throw new Error("Error Dude");
    // } else {
    //   return (
    //     <div className="App">
    //       <h2>Testing man</h2>
    //       <button
    //         onClick={() => {
    //           if (this.state.counter <= 3)
    //             this.setState({
    //               ...this.state,
    //               counter: this.state.counter + 1,
    //             });
    //           else {
    //             this.setState({ ...this.state, error: "error" });
    //           }
    //         }}
    //       >
    //         Click me if you looking for trouble!!!
    //       </button>
    //     </div>
    //   );
    // }
    return <h1>Rabani React Logger</h1>;
  }
}

export default ErrorBoundaryHoc(App);
