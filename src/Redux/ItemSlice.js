import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ClearitemIncart, deleteitemIncart, getcart, getOnceItem, getItems, getOnceThirt, getshirts, Setcart } from "../DAL/API";


export const GetItems=createAsyncThunk(
    "Items/GetItems",
    async(_,{rejectWithValue})=>{
        try{
        const response=await getItems()
        return  response
    }catch(error){
        return rejectWithValue(error.message)
    }
    }
)

export const GetOnceItem=createAsyncThunk(
    "Items/GetOnceItem",
    async(id,{rejectWithValue})=>{
        try{
        const response=await getOnceItem(id)
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

export const GetOnceThirt=createAsyncThunk(
    "Tshirts/GetOnceThirt",
    async(id)=>{
        try {
            const response=await getOnceThirt(id)
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
        OnceItem:[],
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
        GetItems(){},
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
        [GetOnceItem.fulfilled]:(state,action)=>{
            state.OnceItem=action.payload
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
        [GetOnceThirt.fulfilled]:(state,action)=>{
            state.OnceItem=action.payload
        },

    }
    
})

export default ItemSlice.reducer
export const {SetItemsIncart,DeleteItemsIncart,SetSearchValue,
    ClearSearchValue,ClearitemsIncart,ToggleWrapperActive,SetTotalPrice}=ItemSlice.actions


    /*"description":"ВНИМАНИЕ ! Маломерят на два размера! Длина 
   стельки 40-24,5см, 41- 25 см, 42- 25,5 см, 43 -26 см, 44 -26,5 см ,45-27 см. 
   Удобная и функциональная обувь, выполненная из текстильных материалов, легко комбинируется с любым 
   стилем одежды. Цветовая гамма делает их универсальными. Глубокая посадка и шнуровка обеспечат надежную 
   фиксацию на ноге. Мягкая дышащая стелька и подкладка изготовлены из текстильного материала. Подошва 
   достаточно лёгкая для комфортной ходьбы, устойчивая и не скользкая. Спортивная мужская обувь актуальна в 
   любой сезон, потому что кроссовки созданы для активного образа жизни. Изготовлены из 100% текстильного полотна с 
   рельефной подошвой. Благодаря материалам нога в обуви чувствует себя комфортно, нагреваясь и охлаждаясь по мере необходимости 
   за счёт "дышащего" материала.Кроме того, что кроссовки идеально дополнят любой повседневный
    аутфит, они могут быть полезны в фитнес-зале или для пробежек на улице. Сочетаются с каждой вещью в вашем гардеробе.",
    "characteristic": [
        {
         "title": "Сезон",
         "value":"круглогодичный"
        },
        {
            "title": "Страна производства",
            "value":"Узбекистан"
        },
        {
            "title": "Пол",
            "value":"Мужской"
        },
        {
            "title": "Особенности модели",
            "value":"Модная стильная удобная"
        }
    ]*/
    
      