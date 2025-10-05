import './App.css'
import Banner from './components/Banner/Banner'
import Company from './components/Company/Company'
import Header from './components/Header/Header'
import ImageBox from './components/ImageBox/ImageBox'
import Navbar from './components/Navbar/Navbar'
import Supplier from './components/Supplier/Supplier'
import SupplilerImg from './components/SupplierImg/SupplilerImg'
import NamePlate from './components/NamePlate/NamePlate'
import Map from './components/Map/Map'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import FooterLast from './components/FooterLast/FooterLast'
import Services from './components/Services/Services'
// import Slider from 'react-slick'
// import Slick from './components/Slider/Slider'

function App() {
  return (
    <>
       <Header/>
       <Navbar></Navbar>
       <Banner></Banner>
       <Supplier></Supplier>
       <SupplilerImg></SupplilerImg>
       <Services></Services>
       <Company></Company>
       <NamePlate></NamePlate>
       <ImageBox></ImageBox>
       <Map></Map>
       <Contact></Contact>
       <Footer></Footer>
       <FooterLast></FooterLast>
    </>
  )
}

export default App
