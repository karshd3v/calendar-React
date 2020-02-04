import React from "react";
import "./styles.css";
import Calendar from "./components/calendar";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Calendar />
      </div>
    );
  }
}

export default App;
