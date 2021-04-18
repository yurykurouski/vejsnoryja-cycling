import './App.css';
import Main from "../main/Main";
import Sidebar from "../side-bar/Sidebar";
import FloatCard from "../float-card/FloatCard";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Main />
      <FloatCard/>
    </div>
  );
}

export default App;