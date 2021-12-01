import { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Header } from "../components/Header";
import { Search } from "../components/Search";
export default function Home() {
  const [input, setInput] = useState("");
  const match = useRouteMatch();

  console.log(
    "test if can i use ??  ",
    CSS.supports("grid-template-rows", "masonry")
  );

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setPath(`gif/${input}`);
  };

  return (
    <div className="container mx-auto px-4   ">
      <Header />
      <div className=" flex justify-center">
        <Search
          input={input}
          handleInput={handleInput}
          handleSubmit={handleSubmit}
        />
        <Link to={`${match.url}/gift/hola`}>Submit</Link>
      </div>
    </div>
  );
}
