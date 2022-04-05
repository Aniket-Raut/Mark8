import './categorycard.css'

export const CategoryCard=(prop)=>{
    return(
        <div className='categorycard-main-cnt'>
            <img src={prop.im} width='150px'></img>
            <div className='categorycard-text'>{prop.txt}</div>
        </div>
    )
}

export const CategoryContainer=()=>{
    return(
        <div className='categorycontainer-main-cnt'>

        </div>
    )
}