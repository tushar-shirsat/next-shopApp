import React from 'react'
import { useSelector } from 'react-redux'
import ShopCategories from './ShopCategories'

const ShopCategoriess = () => {
    const shopCategories = useSelector(state => state.ShopCategories)
    return <ShopCategories categories={shopCategories}/>
}

export default ShopCategoriess
