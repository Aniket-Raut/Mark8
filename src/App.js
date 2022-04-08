import logo from './logo.svg';
import './App.css';
import Snackbar, { NavBar } from './components/navbar/NavBar';
import { BtMenu } from './components/BtMenu';
import { SlideShow } from './components/slideshow/SlideShow';
import { CategoryCard, CategoryContainer } from './components/categories/CategoryCard';

// category images
import c1 from './assets/images/categories/Slices.gif'
import c2 from './assets/images/categories/Slices-06.gif'
import c3 from './assets/images/categories/Slices-07.gif'
import c4 from './assets/images/categories/Slices-09.gif'
import c5 from './assets/images/categories/Slices-10.gif'
import c6 from './assets/images/categories/Slices-11.gif'
import c7 from './assets/images/categories/Slices-12.gif'
import c8 from './assets/images/categories/Slices-13.gif'
import { Coupon } from './components/discountcoupon/Coupon';
import { DiscountArea } from './components/discountcoupon/DiscountArea';
import { Footer } from './components/Footer';
import { CategContainer } from './components/categories/CategCont';
import { CardView, CardView2 } from './components/cardview/CardView1';
import { LatestDeals } from './components/Deals/LatestDeals';
import { NavBarMobile } from './components/navbar/NavBarMobile';
import { DialogPoint } from './components/DialogPoint';
import { ScrollViewHorizontal } from './components/horizontalScroller/ScrollHoriontal';
import { SlideShowMobile } from './components/slideshow/SlideShowMobile';

import im1 from './assets/images/product/apple.png'
import im2 from './assets/images/product/orange.png'
import im3 from './assets/images/product/banana.png'
import im4 from './assets/images/product/pineapple.png'
import im5 from './assets/images/product/mango.png'
import { products } from './DummyData/producs';


function App() {

  function ShowSlideShow(){
    if(window.innerWidth<=600){
      return(
        <SlideShowMobile></SlideShowMobile>
      )
    }else{
      return(
        <SlideShow></SlideShow>
      )
    }
  }

  function ShowNavBar(){
    if(window.innerWidth<=600){
      return(
        <NavBarMobile></NavBarMobile>
      )
    }else{
      return(
        <NavBar></NavBar>
      )
    }
  }


  return (
    <div className="App">
      {/* <Snackbar></Snackbar> */}
      <ShowNavBar></ShowNavBar>
      <BtMenu></BtMenu>
      <ShowSlideShow></ShowSlideShow>
      {/* <SlideShow/> */}

      <DiscountArea>
      </DiscountArea>

      <div className='category-super-cnt'>
        <CategContainer></CategContainer>
      </div>
      <div>
        <LatestDeals></LatestDeals>
      </div>

      <DialogPoint>
        <input placeholder='Search..'></input>
      </DialogPoint>
      <ScrollViewHorizontal scrollID="latest" mTitle="Popular Items">
        <CardView2 img={im2} disc='8' pname="Orange" quantity='1Kg' rating='4.5' ratings='19' price='60' dprice='55'></CardView2>
        <CardView2 img={im3} disc='20' pname="Banana" quantity='1Kg' rating='3.9' ratings='12' price='90' dprice='72'></CardView2>
        <CardView2 img={im4} pname="Pineapple" quantity='1Kg' rating='3.9' ratings='12' price='102' disc='20' dprice='82'></CardView2>
        <CardView2 img={im5} disc='38' pname="Bananapalli mango" quantity='1Kg' rating='3.9' ratings='12' price='140' dprice='140'></CardView2>
        <CardView2 img={im1} pname="Apple" quantity='1Kg' rating='3.9' ratings='12' price='120'></CardView2>

        
        <CardView></CardView>
        <CardView></CardView>
        <CardView></CardView>
        <CardView></CardView>
        <CardView></CardView>
        <CardView></CardView>
        <CardView></CardView>
      </ScrollViewHorizontal>

      <ScrollViewHorizontal scrollID="suggested" mTitle="Suggested Items">
      {products.map(
          (product)=>{
            return <CardView2 img={product.img} disc={product.discount} pname={product.name} quantity={product.quntity} rating={product.rating} ratings={product.ratings} price={product.price} dprice={product.dprice} unit={product.unit}></CardView2>
          })
      }

      </ScrollViewHorizontal>
      
      <Footer></Footer>
    </div>
  );
}



export default App;
