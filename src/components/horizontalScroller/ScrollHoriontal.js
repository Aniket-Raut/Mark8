import './scrollhorizontal.css'
import left from '../../assets/icons/chevron-left.svg'
import right from '../../assets/icons/angle-right.svg'

export const ScrollViewHorizontal=(props)=>{
    const scrollL=()=>{
        document.getElementById(props.scrollID).scrollLeft -= 250;
    }
    const scrollR=()=>{
        document.getElementById(props.scrollID).scrollLeft += 250;
    }
    return(
        <div className='scrollhorizontal-main-cont'>
            <div className='title1'>{props.mTitle}</div>
            <div className='scrollhorizontal-content-area'>
                <div className='scrollhorizontal-button-cnt'>
                    <div className='button-left' onClick={scrollL}>
                        <img src={left} width='13px'></img>
                    </div>
                </div>
                <div id={props.scrollID} className='scrollhorizontal-items'>
                    {props.children}
                </div>
                <div className='scrollhorizontal-button-cnt' onClick={scrollR}>
                    <div className='button-left'>
                        <img src={right} width='13px'></img>
                    </div>
                </div>
                
            </div>
        </div>
    )
}