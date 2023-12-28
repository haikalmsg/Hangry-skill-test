import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Main from './Pages/Main/Main';
import { DropdownContextProvider } from './Context/DropdownContext';

function App() {
  return (
    <div className="App">
      <DropdownContextProvider>

      <Navbar />
      <Main />
      </DropdownContextProvider>
      
    </div>
  );
}

export default App;
