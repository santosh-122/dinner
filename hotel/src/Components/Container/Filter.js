import React,{useState} from 'react';
import {useSelector, useDispatch } from 'react-redux';
import {sfilter,Rfilter} from "../Reducer/Action"

const Filter = () => {
    const prod = ["All Items","Rice Items","Cold Drinks","Pizza","Hot Drinks"];
    const [filter,setFilter] = useState("All Items");
  //  const filt = useSelector(state => state.filterreducer.filter_name);
      const dispatch = useDispatch()
      dispatch(sfilter(filter))
  return (
    <div>
        <center className = 'mt-3'>
            <span className='h3 m-2'>Filter :</span>
            <select name="filter" className='p-1'onChange={(e)=> setFilter(e.target.value)} >
                {prod.map((item,index) =>(
                    <option value={item} key={index}>{item}</option>
                ))}
            </select>
           
        </center>
       
    </div>
  );
}

export default Filter;
