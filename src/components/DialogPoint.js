import './dialogpoint.css'

export const DialogPoint=(prop)=>{
    return(
        <div id={prop.idb} className='dialog-pointer-main-cnt'>
            <div className='dialog-point'></div>
            <div className='dialog-msg'>{prop.children}</div>
        </div>
    )
}