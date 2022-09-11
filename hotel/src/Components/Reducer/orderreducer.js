const initialState = []

export default function orderreducer(state = initialState,action){
   const  {type,payload} = action;
   switch(type){
    case "ADDORDER" :
        return [...state,payload]
    case "Remove" :
         return state.filter(item => item.id !== payload.id);
    default:
        return state
   }
}