import './App.css';
import Content from './content/Content';
import Sidebar from './side-bar/Sidebar';
import FloatCard from './aside/float-card/FloatCard';
import AddButton from './aside/add-button/AddButton';

function App() {
  return (
    <div className='app'>
      <Sidebar />

      <Content/>
  
      <FloatCard />
      <AddButton />
    </div>
  );
}

export default App;