import { useCallback } from "react";

function App() {
  const handleClick = useCallback(() => {
    console.log("Clicked!");
  }, []);

  return <button onClick={handleClick}>Click Me</button>;
}
 export default App;