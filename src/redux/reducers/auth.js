
import types from "../types";

const intial_state= {
 
    isLogin:false,
  
}

export default function counterReducer(state=intial_state,action) {
    switch(action.type){
        case types.LOGIN:
     
            return{
                isLogin:action.payload
            }
        case types.ONLOGOUT:
            return {
              
                isLogin:action.payload
            }
        default:
            return{
                ...state
            }
    }
    
}