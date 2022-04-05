import { CategoryCard } from "./CategoryCard"
import './categorycontainer.css'
import c1 from '../../assets/images/categories/Slices.gif'
import c2 from '../../assets/images/categories/Slices-06.gif'
import c3 from '../../assets/images/categories/Slices-07.gif'
import c4 from '../../assets/images/categories/Slices-09.gif'
import c5 from '../../assets/images/categories/Slices-10.gif'
import c6 from '../../assets/images/categories/Slices-11.gif'
import c7 from '../../assets/images/categories/Slices-12.gif'
import c8 from '../../assets/images/categories/Slices-13.gif'



export const CategContainer=()=>{
    return(
        <div className='categ-main-container'>
            <div className="categ-main-title">
                <h3>All Categories</h3>
            </div>
            <div className="categ-main-items">
                <CategoryCard im={c1} txt="Cold Drinks & Beverages"/>
                <CategoryCard im={c2} txt="Vegetables"/>
                <CategoryCard im={c3} txt="Cereals"/>
                <CategoryCard im={c4} txt="Pet Food"/>
                <CategoryCard im={c5} txt="Medicines"/>
                <CategoryCard im={c6} txt="Coffee"/>
                <CategoryCard im={c7} txt="Meat"/>
                <CategoryCard im={c8} txt="Spices"/>
            </div>
            
        </div>
    )
}