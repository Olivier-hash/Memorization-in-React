import { useMemo } from "react";

function App({ items }) {
  const expensiveCalculation = useMemo(() => {
    console.log("Calculating...");
    return items.reduce((a, b) => a + b, 0);
  }, [items]);

  return <div>Sum: {expensiveCalculation}</div>;
}