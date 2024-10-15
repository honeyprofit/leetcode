import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const listner = () => {
      console.log(counter);
    };

    document.body.addEventListener("click", listner);

    return () => {
      document.body.removeEventListener("click", listner);
    };
  }, [counter]);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>+ Increment</button>
      <div>Count: {counter}</div>
    </div>
  );
}

export default App;
