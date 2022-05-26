import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addOrder, getOrders } from "../DAL/API";

export const GetOrders=createAsyncThunk(
    "Items/GetOrders",
    async(obj)=>{
        try {
      const response=await getOrders() 
     //response.map(obj=>obj.items).flat()
     const data=response.reduce((prev,obj)=>[...prev, ...obj.items],[])
      //console.log(data)
       return data     
        } catch (error) {
           
        }
    }
)
export const AddOrders=createAsyncThunk(
    "Items/AddOrders",
    async(obj)=>{
    try {
      const response=await addOrder(obj)
      return response
    }
     catch (error) {
        alert("Не удалось выполнить заказ :(")
    }
}
)

 const OrdersSlice=createSlice({
    name:"orders",
    initialState:{
        OrderId:"",
        OrderCards:[],
    },
    reducers:{

    },
    extraReducers:{
        [AddOrders.fulfilled]:(state,action)=>{
            state.OrderId=action.payload
            //console.log(action.payload)
        },
        [GetOrders.fulfilled]:(state,action)=>{
            state.OrderCards=action.payload
            //console.log(action.payload.items)
        }

    }
})

export default OrdersSlice.reducer
//export const {}=OrdersSlice.actions