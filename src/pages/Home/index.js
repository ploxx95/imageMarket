import { useState } from "react";
import { Header } from "../../components/Header";

export default function Home() {
  const [input, setInput] = useState("");

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
        <form onSubmit={handleSubmit}>
          <input
            className="shadow-md mt-6 px-2 py-3 "
            value={input}
            onChange={handleInput}
          ></input>
        </form>
      </div>
    </div>
  );
}
