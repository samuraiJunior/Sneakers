import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ClearitemIncart, deleteitemIncart, getcart, getItems, Setcart } from "../DAL/API";


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







const ItemSlice=createSlice({
    name:"Items",
    initialState:{
        items:[
            /*{"Imgsrc":"./../Imgs/itemsIMG/item 1.jpg","category":"Мужские Кроссовки","itemName":"Blazerre Mid Suede","price":"13 990 руб.", "id":"99"},
            {"Imgsrc":"./../Imgs/itemsIMG/item 2.jpg","category":"Мужские Кроссовки","itemName":" Nike Air Max 270","price":"12 990 руб.", "id":"2"},
            {"Imgsrc":"./../Imgs/itemsIMG/item 3.jpg","category":"Мужские Кроссовки","itemName":" Nike Blazer Mid Suedegh","price":"8 499 руб.", "id":"3"},
            {"Imgsrc":"./../Imgs/itemsIMG/item 4.jpg","category":"Мужские Кроссовки","itemName":"Кроссовки Puma X Aka Boku Future Rider","price":"8 999 руб.", "id":"4"},
            {"Imgsrc":"./../Imgs/itemsIMG/item 5.jpg","category":"Мужские Кроссовки","itemName": "Under Armour Curry 8","price":"15 199 руб.", "id":"5"},
            {"Imgsrc":"./../Imgs/itemsIMG/item 6.jpg","category":"Мужские Кроссовки","itemName":" Nike Kyrie 7","price":"11 299 руб.", "id":"6"},
            {"Imgsrc":"./../Imgs/itemsIMG/item 7.jpg","category":"Мужские Кроссовки","itemName":" Jordan Air Jordan 11","price":"10 799 руб.", "id":"7"},
            {"Imgsrc":"./../Imgs/itemsIMG/item 8.jpg","category":"Мужские Кроссовки","itemName":" Nike LeBron XVIII","price":"16 499 руб.", "id":"8"},
            {"Imgsrc":"./../Imgs/itemsIMG/item 9.jpg","category":"Мужские Кроссовки","itemName":"Nike Lebron XVIII Low","price":"13 999 руб.", "id":"9"},
            {"Imgsrc":"./../Imgs/itemsIMG/item 10.jpg","category":"Мужские Кроссовки","itemName":"Nike Blazer Mid Suede","price":"8 499 руб.", "id":"10"},
            {"Imgsrc":"./../Imgs/itemsIMG/item 11.jpg","category":"Мужские Кроссовки","itemName":" Puma X Aka Boku Future Rider","price":"8 999 руб.", "id":"11"},
            {"Imgsrc":"./../Imgs/itemsIMG/item 7.jpg","category":"Мужские Кроссовки","itemName":" Nike Kyrie Flytrap IV","price":"11 299 руб.", "id":"12"},*/
        ],
        isfetching:false,
        itemsLoading:false,
        error:[],
        itemsIncart:[],
        SearchValue:"",
        OrderId:"",
        WrapperIconActive:false,

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
        }
    },
    extraReducers:{
        [GetItems.pending]:(state)=>{
            state.itemsLoading=true
            state.error=null
        },
        [GetItems.fulfilled]:(state,action)=>{
            state.items=action.payload
            state.itemsLoading=false
        },
        [GetItems.rejected]:(state,action)=>{
            state.error=action.payload
           
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
export const {SetItemsIncart,DeleteItemsIncart,SetSearchValue,ClearSearchValue,ClearitemsIncart,ToggleWrapperActive}=ItemSlice.actions