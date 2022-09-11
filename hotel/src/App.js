import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import NotFound from './NotFound';
import Orders from './Components/Orders';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/orders" element={<Orders/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
