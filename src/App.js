import { useEffect, useState } from "react";
import Gift from "./components/Gift";
import Gift_Fetcher from "./components/services/Gift_Fetcher";
import { Route } from "wouter";

function App() {
  const [gift, setGift] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    Gift_Fetcher(input).then((gift_data) => setGift(gift_data));

    return () => {};
  }, [input]);
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  console.log(gift);
  return (
    <div className="container mx-auto px-4  h-36   bg-gray-100">
      <div className=" flex justify-center">
        <form>
          <input
            className="shadow-md mt-6 px-2 py-3 "
            value={input}
            onChange={handleInput}
          ></input>
        </form>
      </div>
      <div className="flex flex-wrap ">
        {gift.map(({ urls, description, id }) => (
          <Gift key={id} url={urls.thumb} title={description} />
        ))}
      </div>
    </div>
  );
}

export default App;
