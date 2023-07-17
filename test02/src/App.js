
import './App.css';
import {BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom'
import Ssu from './Pages/Ssu';
import Abca from './Pages/Abca';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { AppBar, Button as Button1, ThemeProvider} from '@mui/material';



function App() {
  return (
    <div className="App">
      <div className="App-header">
         
      <Router>    
     
          <AppBar position="static" color="primary" enableColorOnDark>
           
            <Button1 variant="contained"><Link href="#" to="/">SSU</Link></Button1>
          </AppBar>
          <AppBar position="static" color="primary">
           
            <Button1 variant="contained"><Link to="/abca">ABCA</Link>    </Button1>  
          </AppBar>
                 
     
       
        <Routes>
          <Route path="/" element={<Ssu />}/>
          <Route path="/abca" element={<Abca />}/>
        </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;
