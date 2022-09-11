import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Header from './Container/Header'
import { RemoveProduct } from './Reducer/Action';

const Orders = () => {
  const dispatch = useDispatch()
  const list =  useSelector(state => state.orderreducer);
  const Handler =   (id,name,prize,table_number,url) =>  {
       dispatch(RemoveProduct(id,name,prize,table_number,url))
      alert('Remove the order')
  }
  return (
    <div>
      <Header />
        <center>
        {list.length>0?
          <div className='container'>
               <div className='row'>
                   {list.map((item,index) => 
                   (
                     <div className='col-md-3' style={{padding:"5px"}} key={index.id}>
                       <div className='card' style={{width:"18rem",padding:"3px"}}>
                         <img src={item.url} className= 'card-img-top'/>
                         <div className='card-body'>
                             <h5 className='card-title'>{item.name}</h5>
                             <div className='card-text'>Rs.{item.prize}</div>
                            <p>Table Number : {item.table_number}</p>
                            <button className='btn btn-primary' onClick={() => Handler(item.id,item.name,item.prize,item.table_number,item.url)}>Remove</button>
                             </div>
                             </div>
                         </div>
                   ))}
               </div>
          </div>
          :
          <div className='h4'>
            No order placed yet
          </div>
          }
        </center>
        </div>
  )
}

export default Orders;