import './App.css';
import Main from "../main/Main";
import Sidebar from "../side-bar/Sidebar";
import FloatCard from "../float-card/FloatCard";
import AddButton from './add-button/AddButton';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Main />
      <FloatCard />
      <AddButton />
    </div>
  );
}

export default App;