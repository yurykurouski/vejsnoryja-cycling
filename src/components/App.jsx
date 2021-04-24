import './App.css';
import Content from "./content/Content";
import Sidebar from "./side-bar/Sidebar";
import FloatCard from "./float-card/FloatCard";
import AddButton from './add-button/AddButton';
console.log(process.env.REGISTRATION_URL)
function App() {
  return (
    <div className="app">
      <Sidebar />

      <Content/>
  
      <FloatCard />
      <AddButton />
    </div>
  );
}

export default App;