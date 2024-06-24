import logo from './logo.svg';
import './App.css';
import AddPage from './Components/AddPage';
import ViewPage from './Components/ViewPage';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <routes>
    <route path="/" element={<AddPage/>}/>
    <route path="/ViewPage" element={<ViewPage/>}/>
   </routes>
   </BrowserRouter>
  );
}

export default App;
