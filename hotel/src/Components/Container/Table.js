import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {setTable} from '../Reducer/Action';

const Table = () => {
    const numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    const [number,setNumber]=useState(null);
    const ActiveBtn = 'btn btn-outline-primary m-2 active';
    const inActiveBtn = 'btn btn-outline-primary m-2';
    // const  movi = (num) => {
    //   setNumber(num)
    //   return(
    //     dispatch(setTable(number))
    //   )
    // }
    // const table_number = useSelector(state => state.tablereducer.table_number);
    const dispatch =useDispatch()
    dispatch(setTable(number))
  return (
    <div>
        <center className="mt-2">
            <h4>Please select your table number:</h4>
            {numbers.map((num,index) =>(
                <div style={{display:'inline'}} key={index}>
                <button className={number===num?ActiveBtn:inActiveBtn} onClick={() => setNumber(num) }>{num}</button>
                </div>
            ))}
        </center>

    </div>
  )
}

export default Table