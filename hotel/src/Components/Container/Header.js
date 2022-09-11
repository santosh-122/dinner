import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'


const Header = () => {
 const count = useSelector(state => state.orderreducer.length);
  return (
    <div>
       <nav className= 'navbar navbar-light bg-light'>
           <a className='navbar-brand bg-outline-primary'>Restaurant</a>
        <button className='btn btn-primary'><Link to = "/Orders" style={{color:"white",textDecoration:"none"}}>Orders</Link><span className='badge badge-secondary'>{count}</span></button>  
        </nav>
    </div>
  )
}
export default Header