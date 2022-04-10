import "./App.css";
import { PlayProvider } from "./contexts/PlayContext";
import Router from "./router/Router";

function App() {
  return (
    <PlayProvider>
      <Router />
    </PlayProvider>
  );
}

export default App;
