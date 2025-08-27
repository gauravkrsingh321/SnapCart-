import { createContext, useContext, useState } from "react";
import axios from "axios";

export const DataContext = createContext(null);

export const DataProvider = ({children}) => {
  const [data,setData] = useState(null);

  //fetch products
  const fetchAllProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.in/api/products?limit=150");
      // console.log(res)
      const productsData = res.data.products;
      setData(productsData);
    } 
    catch (error) {
      console.log(error)
    }
  }

  const getUniqueCategory = (data,property) => {
     return ["All",...new Set(data?.map(currElem => currElem[property]))];
  }

  const categoryOnlyData = getUniqueCategory(data,"category");
  const brandOnlyData = getUniqueCategory(data,"brand");

  return <DataContext.Provider value={{data,setData,fetchAllProducts,categoryOnlyData,brandOnlyData}}>
    {children}
  </DataContext.Provider>
}

//Custom hook
export const getData = ()=> useContext(DataContext)