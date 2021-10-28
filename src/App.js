import { BrowserRouter as Router, Route } from "react-router-dom";
import ListImage from "./components/ListImage";
import Home from "./pages/Home/index";

function App() {
  return (
    <>
      <Router>
        <Route exact component={Home} path="/" />
        <Route component={ListImage} path="/gift/:keyword" />
      </Router>

      {/* <ListGifts word={word} /> */}
    </>
  );
}

export default App;
