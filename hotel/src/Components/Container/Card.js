import React,{useEffect,useState} from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import axios from 'axios'
import {addorder,ResetTable,Rfilter } from '../Reducer/Action';
import { useNavigate } from 'react-router-dom';

const Card = () => {
  const filter_name = useSelector(state => state.filterreducer.filter_name);
  const table_number = useSelector(state => state.tablereducer.table_number);
    const [data,setData] = useState([])
    const[cloneData,setCloneData] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    useEffect(()=>{
        // fetch('https://food-itema-default-rtdb.firebaseio.com/telugu-skillhub-api/-MsE8GfWtRjc8x_t8pCC.json').then(
        //     response => response.json()
        //      ).then(
        //          json =>  setData(json.items);
        //                    setCloneData(json.items);
        //      )},[])
        
     axios.get("https://food-itema-default-rtdb.firebaseio.com/telugu-skillhub-api/-MsE8GfWtRjc8x_t8pCC.json").then(
         response => {setData(response.data.items);setCloneData(response.data.items);}
     )},[])
    
     useEffect(() => {
       if(filter_name != "All Items"){
         let specific = cloneData.filter(item => item.category===filter_name);
          setData(specific);
       }
       else {
         setData(cloneData);
       }
     },[filter_name] )
     const Handler =   (id,name,prize,url) =>  {
      if(table_number !== null){
        if(window.confirm('confirm the order')){
         dispatch(addorder(id,name,prize,table_number,url))
         dispatch(ResetTable())
         dispatch(Rfilter())
         navigate("/Orders")
      }
      //  window.confirm("order places successfully");
      }
      else{
        alert("please select the table number");
      }
     }
  return (
    <div>
        <center>
          {data.length>0?
          <div className='container'>
               <div className='row'>
                   {data.map((item,index) => 
                   (
                     <div className='col-md-4' style={{padding:"5px"}} key={index}>
                       <div className='card' style={{width:"18rem",padding:"3px"}}>
                         <img src={item.url} className= 'card-img-top'/>
                         <div className='card-body'>
                             <h5 className='card-title'>{item.name}</h5>
                             <div className='card-text'>Rs.{item.prize}</div>
                             <button className='btn btn-primary' onClick={() => Handler(item.id,item.name,item.prize,item.url)}>Order</button>
                             </div>
                             </div>
                         </div>
                   ))}
               </div>
          </div>
          :
          <div className='spinner-border text-primary'></div>
          }
        </center>
    </div>
  )
}

export default Card;