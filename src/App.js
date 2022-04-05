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
import { CardView } from './components/cardview/CardView1';
import { LatestDeals } from './components/Deals/LatestDeals';
import { NavBarMobile } from './components/navbar/NavBarMobile';
import { DialogPoint } from './components/DialogPoint';
import { ScrollViewHorizontal } from './components/horizontalScroller/ScrollHoriontal';


function App() {
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
      <SlideShow/>

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
        <CardView></CardView>
        <CardView></CardView>
        <CardView></CardView>
        <CardView></CardView>
        <CardView></CardView>
        <CardView></CardView>
        <CardView></CardView>
      </ScrollViewHorizontal>
      
      <Footer></Footer>
    </div>
  );
}



export default App;
