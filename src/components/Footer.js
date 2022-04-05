import './footer.css'
import visa from '../assets/icons/visa.png'
import paytm from '../assets/icons/pngegg.png'
import twitter from '../assets/icons/twitter.svg'
import fb from '../assets/icons/facebook.svg'
import insta from '../assets/icons/instagram.svg'
import linkdin from '../assets/icons/linkedin.svg'
import gplay from '../assets/icons/getandroid.png'
import appstore from '../assets/icons/getios.png'
import upi from '../assets/icons/upi.svg'

export const Footer=()=>{
    return(
        <div className="footer-main-cnt">
            <div className='footer-row1'>
                <Payments></Payments>
            </div>
            <div className='footer-row2'>
                <div className='footer-row2-cl3'>
                    <div className='footer-title'>Registered Office</div>
                    <div>240, XMC Street, SXY City, Mars,440450</div>
                    <div>+1-3080-567</div>
                </div>
                <div className='footer-row2-cl1'>
                    <div className='footer-title'>Company</div>
                    <div>About US</div>
                    <div>Blog</div>
                    <div>Careers</div>
                    <div>News</div>
                </div>
                <div className='footer-row2-cl1'>
                    <div className='footer-title'>Help</div>
                    <div>Contact US</div>
                    <div>FAQs</div>
                    <div>Become Vendor</div>
                </div>
                <div className='footer-row2-cl2'>
                </div>
            </div>
            <div className='footer-row4'>
                <div className='footer-social'>
                    <img src={fb} width='22vh'></img>
                    <img src={insta} width='22vh'></img>
                    <img src={twitter} width='22vh'></img>
                    <img src={linkdin} width='22vh'></img>
                </div>
                <DownloadAppBtn></DownloadAppBtn>
                
            </div>
            <div className='footer-row3'>
                Copyright &#169; Mark8 Technologies Pvt Ltd. All Rights Reserved
            </div>
        </div>
    )
}

function DownloadAppBtn(){
    if(window.innerWidth>600){
        return(
            <div className='footer-download'>
                <img src={gplay} width='90vh'></img>
                <img src={appstore} width='90vh'></img>
            </div>
        )
    }
}

function Payments(){
    return(
        <div className='footer-payments'>
            Payments Accepted
            <img src={visa} width='40px'/>
            <img className="payment-background" src={paytm} width='40px'/>
            <img className="payment-background" src={upi} width='38px'/>
        </div>
    )
}