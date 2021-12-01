import { BrowserRouter as Router, Route } from "react-router-dom";
import ListImage from "./components/ListImage";
import Appi from "./components/TestRoute";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Route component={Appi} path="/test" />

        <Route component={ListImage} path="/gift/:keyword" />
        <Route exact component={Home} path="/" />
      </Router>

      {/* <ListGifts word={word} /> */}
    </>
  );
}

export default App;
