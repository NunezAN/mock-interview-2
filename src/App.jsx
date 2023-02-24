import { useEffect, useState } from "react";

function App() {
  const [input, setInput] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(input);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <input
        value={input}
        onChange={handleOnChange}
        className="border-2 border-blue-400 text-2xl"
        type="text"
      />
    </div>
  );
}

export default App;
