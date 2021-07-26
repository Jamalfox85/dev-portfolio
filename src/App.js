import Main from "./pages/Main";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/Main.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Main />
      </Router>
    </div>
  );
}

export default App;
