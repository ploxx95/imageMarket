import { useEffect, useState } from "react";
// import ApiFetch from "./components/services/ApiFetch";
import Gift from "./components/Gift";
import Gift_Fetcher from "./components/services/Gift_Fetcher";

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
        {gift.map(({ url, title, id }) => (
          <Gift key={id} url={url} title={title} />
        ))}
      </div>
    </div>
  );
}

export default App;
