import './App.css';
import {BrowserRouter , Route , Switch , Link} from 'react-router-dom';
import NavBar from './component/navbar/Navbar';
import AboutUs from './component/about/About';
import ContactUs from './component/contactus/ContactUs';
import RentCar from './component/rentcar/RentCar';
import SellCar from './component/sellcar/SellCar';
import Home from './component/Home/Home';
import Footer from './component/footer/Footer';
import CarView from './component/ca-view/CarView';
import RentCarView from './component/ca-view/RentCarView';
import {FaFacebook} from 'react-icons/fa';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/rentcar">
                <RentCar />
              </Route>
              <Route path="/sellcar">
                <SellCar />
              </Route>
              <Route path="/about">
                <AboutUs />
              </Route>
              <Route path="/contactus">
                <ContactUs />
              </Route>
              <Route path="/carview/:id">
                <CarView />
              </Route>
              <Route path="/rentcarview/:id">
                <RentCarView/>
              </Route>
          </Switch>
        </div>
        <div className="facebook">
         <Link to="/facebook">
            <div>
                <span><FaFacebook/> فيس بوك</span>
            </div>
         </Link>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>

  );
}

export default App;
