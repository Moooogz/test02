
import './App.css';
import {BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom'
import Ssu from './Pages/Ssu';
import Abca from './Pages/Abca';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>              
     
        <Link to="/">SSU</Link>
        <Link to="/abca">ABCA</Link>       
        <Routes>
          <Route path="/" element={<Ssu />}/>
          <Route path="/abca" element={<Abca />}/>
        </Routes>
      </Router>
    
      </header>
    </div>
  );
}

export default App;
