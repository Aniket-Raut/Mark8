import { CardView } from '../cardview/CardView1'
import './latestdeals.css'
import left from '../../assets/icons/chevron-left.svg'
import right from '../../assets/icons/angle-right.svg'

export const LatestDeals=(props)=>{
    const scrollL=()=>{
        document.getElementById('latest-deals-scroll').scrollLeft -= 250;
    }
    const scrollR=()=>{
        document.getElementById('latest-deals-scroll').scrollLeft += 250;
    }
    return(
        <div className='latest-deals-main-cont'>
            <div className='title1'>Latest Deals</div>
            <div className='latest-deals-content-area'>
                <div className='latest-deals-button-cnt'>
                    <div className='button-left' onClick={scrollL}>
                        <img src={left} width='13px'></img>
                    </div>
                </div>
                <div id='latest-deals-scroll' className='latest-deals-items'>
                    <CardView></CardView>
                    <CardView></CardView>
                    <CardView></CardView>
                    <CardView></CardView>
                    <CardView></CardView>
                    <CardView></CardView>
                    <CardView></CardView>
                </div>
                <div className='latest-deals-button-cnt' onClick={scrollR}>
                    <div className='button-left'>
                        <img src={right} width='13px'></img>
                    </div>
                </div>
                
            </div>
            <h6>{props.children}</h6>
            
            
        </div>
    )
}