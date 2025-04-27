import { useState, useMemo } from "react";
import ExpensiveList from "./components/ExpensiveList";

function App() {
  const [count, setCount] = useState(0);
  const [numbers] = useState([1, 2, 3, 4, 5]);

  const total = useMemo(() => {
    console.log("Calculating total...");
    return numbers.reduce((a, b) => a + b, 0);
  }, [numbers]);

  return (
    <div>
      <h1>Total: {total}</h1>
      <ExpensiveList items={numbers} />
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
}

export default App;
