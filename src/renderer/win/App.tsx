import "./App.css";
import { Tools } from "./components/tools";
import { useControlStore } from "./store";

function App() {
  const [activeTool] = useControlStore((state) => [state.activeTool]);
  return (
    <div className="app-control">
      <div className="tool-side">
        <Tools />
      </div>
      <h2 className="main-side">Welcome to electron by vite</h2>
    </div>
  );
}

export default App;
