import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Aboutus from './component/Aboutus';
import Text from './component/Text';
import React ,{useState}from 'react'
import Alert from './component/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode,setmode] = useState('light');
  const [alert,setalert]=useState(null);
  const [textcolor,settextcolor] = useState('dark');
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
   setalert(null);
    },2000);
  }
  
  const togglemode =()=>{
    if(mode=='light'){
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
    showalert("You are entered in Dark mode","Sucess");
    }else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showalert("You are entered in Light mode","Sucess");
    }
  }
  

  return (
   <>
    
    <Router>
    <Navbar text = "TextUtils" mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
   <Routes>
          <Route path="/about" element={<Aboutus/> }>
            
          </Route>
          <Route path="/text"element={<Text mode={mode}  alert={showalert}/> }>
          
          </Route>
        </Routes>
     </div>
    </Router>
  
   
    
     </>
  );
}

export default App;
