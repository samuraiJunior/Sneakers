import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ClearitemIncart, deleteitemIncart, getcart, getItems, getshirts, Setcart } from "../DAL/API";


export const GetItems=createAsyncThunk(
    "Items/Thunk",
    async(_,{rejectWithValue})=>{
        try{
        const response=await getItems()
        return  response
    }catch(error){
        return rejectWithValue(error.message)
    }
    }
)
export const SetItemtoCart=createAsyncThunk(
    "Items/SetItemtoCart",
    async(object,{rejectWithValue})=>{
        try{const response=await Setcart(object)
        return  response
        }catch(error){
            return rejectWithValue(error.message)
        }
    }
)
    

export const getIteminCart=createAsyncThunk(
    "Items/getIteminCart",
    async(_,{rejectWithValue})=>{
      try { const response=await getcart()
        return  response}
        catch(error){
            return rejectWithValue(error.message)
        }
    }
)
export const deleteIteminCart=createAsyncThunk(
    "Items/deleteIteminCart",
    async(obj,{rejectWithValue})=>{
       try{ const response=await deleteitemIncart(obj)
        return  response}
        catch(error){
            return rejectWithValue(error.message)
        }
    }
)

export const CleariteIncart=createAsyncThunk(
    "Items/CleariteIncart",
    async(itemsIncart)=>{
    try {
        itemsIncart.forEach(item => {
            ClearitemIncart(item)
        });
    } catch (error) {
        alert("Не удалось выполнить заказ :(")
    }
    }
)

export const GetTshirts=createAsyncThunk(
    "Tshirts/GetTshirts",
    async()=>{
        try {
            const response=await getshirts()
            return response
        } catch (error) {
            
        }
    } 
)






const ItemSlice=createSlice({
    name:"Items",
    initialState:{
        Sneakers:[],
        Tshirts:[],
        isfetching:false,
        itemsLoading:false,
        error:[],
        itemsIncart:[],
        SearchValue:"",
        OrderId:"",
        WrapperIconActive:false,
        totalPrice:0,
    },
    reducers:{
        SetItemsIncart(state,action){
        state.itemsIncart.push(action.payload)  
        },
        DeleteItemsIncart(state,action){
            state.itemsIncart=state.itemsIncart.filter(i=>i.id !==action.payload)
        },
        SetSearchValue(state,action){
            state.SearchValue=action.payload
        },
        ClearSearchValue(state){
            state.SearchValue=""
        },
        ToggleWrapperActive(state){
            state.WrapperIconActive=!state.WrapperIconActive
        },
        SetTotalPrice(state,action){
            state.totalPrice=action.payload
        }
    },
    extraReducers:{
        [GetItems.pending]:(state)=>{
            state.itemsLoading=true
            state.error=null
        },
        
        [GetItems.fulfilled]:(state,action)=>{
            state.Sneakers=action.payload
            state.itemsLoading=false
        },
        [GetItems.rejected]:(state,action)=>{
            state.error=action.payload
           
        },
        [GetTshirts.fulfilled]:(state,action)=>{
            state.Tshirts=action.payload
        },
        [SetItemtoCart.pending]:(state)=>{
            state.isfetching=true
            state.error=null
        },
        [SetItemtoCart.fulfilled]:(state,action)=>{
            state.itemsIncart.push(action.payload)  
            state.isfetching=false
        },
        [SetItemtoCart.rejected]:(state,action)=>{
            state.error=action.payload
            state.isfetching=false
        },
        [getIteminCart.pending]:(state)=>{
            state.isfetching=true
            state.error=null
        },  
        [getIteminCart.fulfilled]:(state,action)=>{
            state.itemsIncart=action.payload
            state.isfetching=false
        },
        [getIteminCart.rejected]:(state,action)=>{
            state.error=action.payload
            state.isfetching=false
        },
        
        [deleteIteminCart.pending]:(state)=>{
            state.isfetching=true
            state.error=null
        },
        [deleteIteminCart.fulfilled]:(state,action)=>{
            state.itemsIncart=state.itemsIncart.filter(i=>i.id !==action.payload)
            state.isfetching=false
        },
        [deleteIteminCart.rejected]:(state,action)=>{
            state.error=action.payload
            state.isfetching=false
        },
        [CleariteIncart.fulfilled]:(state)=>{
            state.itemsIncart=[]
        },
    }
    
})

export default ItemSlice.reducer
export const {SetItemsIncart,DeleteItemsIncart,SetSearchValue,
    ClearSearchValue,ClearitemsIncart,ToggleWrapperActive,SetTotalPrice}=ItemSlice.actions