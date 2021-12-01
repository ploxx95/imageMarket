export const Search = ({ handleSubmit, input, handleInput }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="shadow-md mt-6 px-2 py-3 "
        value={input}
        onChange={handleInput}
      ></input>
    </form>
  );
};
