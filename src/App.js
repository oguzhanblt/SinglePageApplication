import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import InputItem from "./Components/InputItem";
import Lists from './Components/Lists';
import Header from './Components/Header';
import {v4 as uuidv4} from 'uuid';
import Swal from "sweetalert2";
import React,{useEffect,useState} from 'react';



function App() {

    const[links,setLinks]=useState([]);
    const[showAddLink,setShowAddLink]=useState(false);
    
    const addLink=(link)=>{
      const id=uuidv4();
      const newLink={id,...link}
      setLinks([...links,newLink]);
      Swal.fire({
      icon:'success',
      text:'Link Ekleme Başarılı'
      })
      localStorage.setItem("linkAdded",JSON.stringify([...links,newLink]))
  }
  const deleteLink = (id) => {
        const deleteLink = links.filter((link) => link.id !== id);
        setLinks(deleteLink);
        Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Link Silindi'
        })
        localStorage.setItem("linkAdded",JSON.stringify(deleteLink))
  }
  const scoreUp=(id)=>{ 
    let data=JSON.parse(localStorage.getItem("linkAdded"));
    const linkscore=1;
    const scoreUp= data.map(link=>{
      if(link.id==id){
        return{
          ...link,
          linkScore:linkscore+link.linkScore,
          id:id
        }
      }
      return link;
    })
    localStorage.setItem("linkAdded",JSON.stringify(scoreUp));
    window.location.reload();
  }


  const scoreDown=(id)=>{
    let data=JSON.parse(localStorage.getItem("linkAdded"));
    const linkscore=1;
    const scoreDown= data.map(link=>{
      if(link.id==id){
        return{
          ...link,
          linkScore:link.linkScore-linkscore,
          id:id
        }
      }
      return link;
    })
    localStorage.setItem("linkAdded",JSON.stringify(scoreDown));
    window.location.reload();
  }
  


  const getLinks=JSON.parse(localStorage.getItem("linkAdded"));
  useEffect(()=>{
    if(getLinks==null){
      setLinks([])
    }else{
      setLinks(getLinks);
    }
  },[])
  

  return (
    <>
    <div className="container">
      <Header showForm={()=>setShowAddLink(!showAddLink)}
      changeTextAndColor={showAddLink}/>
      {showAddLink&&<InputItem onSave={addLink}/> }

      <h3>Number of Links: {links.length}</h3>
      {
        links.length > 0 ?
        (<Lists links={links} onDelete={deleteLink} scoreDown={scoreDown} scoreUp={scoreUp} /> ):
        ('no link found')  
      }
    </div>
    </>
  );
}

export default App;
