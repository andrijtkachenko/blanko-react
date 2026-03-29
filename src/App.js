import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { Landing } from "./components/Landing";
import { Herro } from "./components/Herro";
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Herro />
        <Landing />
      </main>
    </div>
  );
}

export default App;
