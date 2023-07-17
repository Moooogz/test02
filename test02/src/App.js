
import './App.css';
import {BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom'
import Ssu from './Pages/Ssu';
import Abca from './Pages/Abca';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <div className="App">
     
      <Router>   
              
             
             <Link href="#" to="/">SSU</Link>
        <Link to="/abca">ABCA</Link>       
        <Routes>
          <Route path="/" element={<Ssu />}/>
          <Route path="/abca" element={<Abca />}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
