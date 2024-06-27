import logo from './logo.svg';
import './App.css';
import AddPage from './Components/AddPage';
import SearchPage from './Components/SearchPage';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import DeletePage from './Components/DeletePage';
import ViewPage from './Components/ViewPage';



function App() {
  return (
  <BrowserRouter><Routes>
    <Route path="/" element={<AddPage/>}/>
    <Route path="/search" element={<SearchPage/>}/>
    <Route path="/delete" element={<DeletePage/>}/>
    <Route path="/view" element={<ViewPage/>}/>
  
    </Routes></BrowserRouter>
  );
}

export default App;
