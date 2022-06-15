import axios from "axios";

const instance=axios.create({
    baseURL:"https://6268f084f2c0cdabac06c090.mockapi.io/",
   /* withCredentials:true,*/
})
const instance2=axios.create({
  baseURL:"https://62738d7a345e1821b21d377c.mockapi.io/",
 /* withCredentials:true,*/
})
 


 export const getItems=async()=>{
    const response=await instance.get("items")
        //console.log(response.data)
      return await response.data
}

export const getOnceItem=async(id)=>{
  const response=await instance.get("items/"+id)
    return await response.data
}

 export const Setcart=async(obj)=>{
  const response=await instance.post("cart",obj)
      //console.log(response.data)
    return await response.data
}
export const getcart=async()=>{
  const response=await instance.get("cart")
      //console.log(response.data)
    return await response.data 
}
export const deleteitemIncart=async(id)=>{
  const response=await instance.delete(`cart/${id}`)
     // console.log(response)
    return await response.data.id
}

export const ClearitemIncart=async(item)=>{
   const response= await instance.delete(`cart/`+item.id)
    return await response.data
}

export const getfavorites=async()=>{
  const response=await instance.get("favorites")
      //console.log(response)
    return await response.data
}



export const postfavorites=async(obj)=>{
  const response=await instance.post("favorites",obj)
      //console.log(response)
    return await response.data
}
export const deletefavorites=async(id)=>{
  const response=await instance.delete(`favorites/${id}`)
      //console.log(response)
    return  await response.data.id
}
export const addOrder=async(obj)=>{
  const response=await instance.post(`orders`,obj)
  //console.log(response.data.id)
  return  response.data.id
}
export const getOrders=async()=>{
  const response=await instance.get("orders")
  //console.log(response.data)
  return response.data
}

export const getshirts=async()=>{
  const response=await instance2.get("Tshirts")
  //console.log(response.data)
  return response.data
}
export const getOnceThirt=async(id)=>{
  const response=await instance2.get("Tshirts/"+id)
  return response.data
}