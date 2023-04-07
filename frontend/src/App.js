import logo from './logo.svg';
import './App.css';
import Axios from "axios";
import React, {useEffect, useState} from 'react';
import Navbar  from './components/Navbar';
function App() {
  const [data,setData] = useState("");
  
  const getData = async() => {
    const response = await Axios.get("http://localhost:5000/getData");
    setData(response.data);
  }
    
  useEffect(() => {
    getData()
  }, []);
  return (
    <><div className="App">
      {data}
    </div><div>
        <Navbar />
      </div></>
  );
}

export default App;
