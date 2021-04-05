import './App.css';
import Content from "../content/Content";
import Sidebar from "../side-bar/Sidebar";
import FloatCard from "../float-card/FloatCard";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Content />
      <FloatCard/>
    </div>
  );
}

export default App;