import './App.css';
import Content from "../main/Main";
import Sidebar from "../side-bar/Sidebar";
import FloatCard from "../float-card/FloatCard";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Content />
      <FloatCard/>
    </div>
  );
}

export default App;