import './slideshow.css'
import leftIC from '../../assets/icons/angle-left.svg'
import rightIC from '../../assets/icons/angle-right.svg'
import banner from '../../assets/images/slides/banner1m.jpg'
import banner2 from '../../assets/images/slides/banner2m.jpg'
import banner3 from '../../assets/images/slides/banner3m.jpg'
import banner4 from '../../assets/images/slides/banner4m.jpg'

export const SlideShowMobile=()=>{
    let count = 0;
    

    const autoScroll=async()=>{
        // const s1 = await document.getElementById('slide-indicator-1')
        // const s2 = await document.getElementById('slide-indicator-2')
        // const s3 = await document.getElementById('slide-indicator-3')
        // const s4 = await document.getElementById('slide-indicator-4')
        if(count===4){
            count=0;
        }
        // count==0?s1.style.backgroundColor="white":s1.style.backgroundColor="rgb(100, 100, 100)"
        // count==1?s1.style.backgroundColor="white":s2.style.backgroundColor="rgb(100, 100, 100)"
        // count==2?s1.style.backgroundColor="white":s3.style.backgroundColor="rgb(100, 100, 100)"
        // count==3?s1.style.backgroundColor="white":s4.style.backgroundColor="rgb(100, 100, 100)"

        console.log(count)
        document.getElementById('scroll-area').scrollLeft = await count*window.innerWidth;
        count++
    }

    const doScrollLeft=()=>{
        document.getElementById('scroll-area').scrollLeft += window.innerWidth;
    }

    const doScrollRight=()=>{
        document.getElementById('scroll-area').scrollLeft -= window.innerWidth;
    }

    return(
        
        <div className='slideshow-main-container'>
            {/* {setInterval(autoScroll,1)} */}
            <div className='hiden'>{setInterval(autoScroll,5000)}</div>
            
            <div id='scroll-area' className='scrollarea-banner'>
                <img id='banner1' src={banner} width='100%'></img>
                <img id='banner2' src={banner2} width='100%'></img>
                <img id='banner2' src={banner3} width='100%'></img>
                <img id='banner2' src={banner4} width='100%'></img>
            </div>

            <div className='slideshow-bottombar'>
                <div className='slideshow-indicator-cnt'>
                    <div id='slide-indicator-1' className='slideshow-indicator'></div>
                    <div id='slide-indicator-2' className='slideshow-indicator'></div>
                    <div id='slide-indicator-3' className='slideshow-indicator'></div>
                    <div id='slide-indicator-4' className='slideshow-indicator'></div>
                </div>
            </div>

            <div className='slide-left-btn-cnt' onClick={doScrollRight} >
                <SlideButton  className='slide-left-btn' src={leftIC}/>
            </div>

            <div className='slide-right-btn-cnt' onClick={doScrollLeft}>
                <SlideButton className='slide-left-btn' src={rightIC}/>
            </div>
            
            
        </div>
    )
}

function SlideButton(prop){
    return(
        <div className='slidebutton-main'>
            <img src={prop.src} width='18px'/>
        </div>
    )
}