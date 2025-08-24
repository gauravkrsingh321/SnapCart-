import React, { useEffect, useState } from 'react'
import {getData} from "../context/DataContext"
import Loading from "../assets/Loading4.webm"
import FilterSection from "../components/FilterSection";
import ProductCard from '../components/ProductCard';

const Products = () => {
  const {data,fetchAllProducts} = getData();

  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [brand, setBrand] = useState('All')
  const [priceRange, setPriceRange] = useState([0,5000])

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)

  }
  const handleBrandChange = (e) => {
    setBrand(e.target.value)
  }
  
  const filteredData = data?.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) &&
    (category === "All" || item.category === category) &&
    (brand === "All" || item.brand === brand) &&
    item.price >= priceRange[0] && item.price <= priceRange[1]
  )

  useEffect(()=>{
    fetchAllProducts()
  },[])

  return (
    <div>
      <div className='max-w-6xl mt-10 mx-auto px-4 mb-10'>
        {
          data?.length > 0 ? (
            <div className='flex gap-8'>
              <FilterSection search={search} setSearch={setSearch} category={category} setCategory={setCategory} brand={brand} setBrand={setBrand} priceRange={priceRange} setPriceRange={setPriceRange} handleCategoryChange={handleCategoryChange} handleBrandChange={handleBrandChange}/>
              <div className='grid grid-cols-4 gap-7 mt-10'>
                {
                  filteredData?.map((product,index)=>{
                    if(index === 7 || index===13 || index===16 ||index==26) return null; // skip these products
                    return <ProductCard key={index} product={product}/>
                  })
                }
              </div>
            </div>
          ): (
            <div className='flex animate-spin items-center justify-center h-[400px]'>
              <video>
                <source src={Loading}  type='video/webm'></source>
              </video>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Products