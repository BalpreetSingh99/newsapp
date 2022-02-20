import { useEffect, useState } from "react";
import axios from "axios";
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Users from "./Users"
import Home from "./Home"


export default function App() {
  const [item, setItem] = useState([]);
  const [category, setCategory] = useState([]);
  const [author, setAuthor] = useState([]);
  useEffect(() => {
    console.log("huhuhuh");
    axios.get("http://localhost:8080/api/feed").then((resp) => {
      console.log(resp);
      setItem(resp.data);
    });
    axios.get("http://localhost:8080/api/category").then((resp) => {
      console.log(resp);
      setCategory(resp.data);
    });
    axios.get("http://localhost:8080/api/author").then((resp) => {
      console.log(resp);
      setAuthor(resp.data);
    });
  }, []);

  function filter(){
    let seletedCategory=document.querySelector('.category-filter').value;
    let seletedAuthor=document.querySelector('.author-filter').value;
    let obj={
      author:seletedAuthor,
      category:seletedCategory
    }
    console.log(obj)
    axios.post("http://localhost:8080/api/feed/filter",{obj}).then((resp) => {
      console.log(resp);
      setItem(resp.data);
    });
  }

  return (
    <div className="App"> 
          <Router>
            <Link to="/users">Users</Link>
            <Link to="/home">Home</Link>
            <Routes>
            <Route path='/users' element={<Users/>} />
            <Route path='/home' element={<Home/>} />
            </Routes>
          </Router>
      
      
    </div>
  );
}