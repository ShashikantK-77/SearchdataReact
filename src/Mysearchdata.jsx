import React, { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";

function Mysearchdata()
{
  const [userData, setUserdata]= useState([]);
  const [filterdata, setFilterdata]= useState([]);
  const [query, setQuery] = useState('');

useEffect(()=>{
    const getUserdata = async()=>{
        const reqData = await fetch("https://fakestoreapi.com/products/");
         const resData = await reqData.json();
        // console.log(resData);
        setUserdata(resData);
        setFilterdata(resData);
   
    }
    getUserdata();
},[]);


const handlesearch = (event) =>{
    const getSearch = event.target.value;
    
    // console.log(getSearch);

    if(getSearch.length > 0)
    {
   
            const searchdata = userData.filter((item)=> item.title.toLowerCase().includes(getSearch));

                                                    
            setUserdata(searchdata);
    }else{
        setUserdata(filterdata);
    }
    setQuery(getSearch);
}


  return(

        <React.Fragment>              
         <Container>

        <div className='row mt-3'> 
            <div className='col-md-12 mt-3 mb-3'>
              <h3 className='mb-3'>Search record Datatable in React Js</h3>                
                <div className="col-md-6">                
                <input  type="text" name='name' value={query}    className="form-control" onChange={(e)=>handlesearch(e)} placeholder='Search...' />
              </div>          
            </div>
                    <br/>
            <div className='col-md-12'>
            <table className="table text-success text-center" style={{ textAlign: "center" }} >
              <thead className='text-success'>
                <tr>
                  <th>Sr. No </th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
              
                </tr>
              </thead>
              <tbody className='text-center'>
            
                {
                   
                  userData.map( (getUser, index)=>(
                  <tr  key={index}>
                  <td>{index+1} </td>
                  <td>{getUser.id}</td>
                  <td className='text-center'>{getUser.title}</td>
                  <td className='text-center'>{getUser.price}</td>
          
                  </tr>
                   )) 
                  
                   }  
                
              </tbody>
            </table>
            </div>
        </div>
      </Container>

        </React.Fragment>
    );
}
export default Mysearchdata;