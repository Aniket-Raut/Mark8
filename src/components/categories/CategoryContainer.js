import { CategoryCard } from './CategoryCard'
import './categorycontainer.css'

export const CategoryContainer=()=>{
    return(
        <div className='container'>
            <CategoryCard im={c1} txt="Cold Drinks & Beverages"/>
            <CategoryCard im={c2} txt="Vegetables"/>
            <CategoryCard im={c3} txt="Cereals"/>
            <CategoryCard im={c4} txt="Pet Food"/>
            <CategoryCard im={c5} txt="Medicines"/>
            <CategoryCard im={c6} txt="Coffee"/>
            <CategoryCard im={c7} txt="Meat"/>
            <CategoryCard im={c8} txt="Spices"/>
        </div>
    )
}