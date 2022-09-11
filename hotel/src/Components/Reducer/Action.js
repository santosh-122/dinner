export const setTable = (value) =>  {

    return({
        type:"setTableNumber",
        payload: value
    });
}; 

export const ResetTable = () =>  {
    //  console.log("table",value)
    return({
        type:"ResetTableNumber"
    });
}; 

export const sfilter = (value) =>  {
    //  console.log("table",value)
    return({
        type:"SetFilter",
        payload: value
    });
}; 

export const Rfilter = (value) =>  {
    //  console.log("table",value)
    return({
        type:"ResetFilter"
    });
}; 

export const addorder = (id,name,prize,table_number,url) =>  {
    //  console.log("table",value)
    return({
        type:"ADDORDER" ,
        payload:{
            id:id,
            name:name,
            prize:prize,
            table_number:table_number,
            url:url
        }

    });
}; 

export const RemoveProduct = (id,name,prize,table_number,url) => {
    return ({
        type:"Remove",
        payload: {id,name,prize,table_number,url}
    });
};