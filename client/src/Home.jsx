import { useEffect, useState } from "react";
import axios from "axios";
import './App.css'



export default function Home() {
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
return (<div className="main">
        <div>
          Filter by:
          <br></br>
          Category
          <select className="category-filter">
            <option></option>
            {category.map((e,i)=>{
              return (
                <option key={i}>{e.category}</option>
              );
            })}
          </select>
          Author
          <select className="author-filter">
            <option></option>
            {author.map((e,i)=>{
              return (
                <option key={i}>{e.author}</option>
              );
            })}
          </select>
          <button onClick={filter}>Filter</button>
        </div>
        
        <div className="items">
          {item.map((e, i) => {
            return (
              <div className="item" key={i}>
                <img className="pic" src={e.thumbnailImage}></img>
                <p>{e.headline}</p>
                <p>{e.category.category}</p>
                <p>{e.author.author}</p>
              </div>
            );
          })}
        </div>
      </div>);

        }