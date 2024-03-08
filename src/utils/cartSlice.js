import {createSlice,current} from "@reduxjs/toolkit"

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
           //vaniala(older) Redux=>Dont mutate state
           //const newState=[...state]
           //new State.items.push(action.payload)
           //return newStore
           
            //redux toolkit we ahve to mutate the state
            //mutating/directly modifying the state here 
               state.items.push(action.payload)
        },
        removeItem:(state,action)=>{
            console.log(current(state));
            
            state.items.pop()
        },
        clearCart:(state,action)=>{
            // you have to either the mutate the exsiting state or return the new state.
            state.items.length=0 //state=[]
            // return{items:[]};
        }
    }
})
export const {addItem,removeItem,clearCart}=cartSlice.actions;

export default cartSlice.reducer;