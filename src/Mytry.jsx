import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const Mytry = () => {

    const [state, setState] = useState([]);
    const [filterdata, setFilterdata]= useState([]);
    const [query, setQuery] = useState('');

    useEffect( () => {

        const DataApi = async()=>{
            const fetchdata = await fetch("https://fakestoreapi.com/products/");
            const responce = await fetchdata.json();
            // console.log(responce);
            setState(responce);
            setFilterdata(responce);
        }
      DataApi();
    }, [])

    const Handlechange = (event) =>{
        const input = event.target.value;

        if(input.length > 0){
           const searchdata = state.filter((item)=>item.title.toLowerCase().includes(input));
           setState(searchdata);
        }else{
            // setState(responce)
            setState(filterdata);
        }
        setQuery(input);
    }
    
    
  return (
    <div>
        <input value={query} onChange={(e)=>Handlechange(e)}  placeholder='Typing.....'/>

        <div>
     
   
{
    state.map((e,index)=>{
     return(
        <div key={index+1} className="card mb-5" style={{width : "30rem"}}>
    <img className="card-img-top m-auto" src={e.image} style={{width : "8rem"}} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">{e.title}</h5>
      <p className="card-text">{e.description}</p>
      <p className="card-text"><small className="text-muted">{e.price}</small></p>
    </div>
 
  </div>

     )
    })
}



        </div>
    </div>
  )
}

export default Mytry