import { createContext, useContext, useState } from "react";
import axios from "axios";

export const DataContext = createContext(null);

export const DataProvider = ({children}) => {
  const [data,setData] = useState(null);

  //fetch products
  const fetchAllProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.in/api/products?limit=150");
      const productsData = res.data.products;
      setData(productsData);
    } 
    catch (error) {
      console.log(error)
    }
  }

  return <DataContext.Provider value={{data,setData,fetchAllProducts}}>
    {children}
  </DataContext.Provider>
}

//Custom hook
export const getData = ()=> useContext(DataContext)