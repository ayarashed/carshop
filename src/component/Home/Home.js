import { Link } from 'react-router-dom';
import {FaChevronLeft , FaPhone , FaEnvelope} from 'react-icons/fa';
import './dist/home.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore , {Autoplay ,Pagination , Navigation } from 'swiper';
import 'swiper/swiper.scss';
import  slider  from "../../car-images/stagepushableelement.MQ5.12.stage.20210311054524.jpeg";
import  slider2  from "../../car-images/stagepushableelement.MQ5.12.stage.20210228090416.jpeg";
import  slider3  from "../../car-images/stagepushableelement.MQ5.12.stage.20210107133900.jpeg";
import  services1   from"../../car-images/services-section/637311003455590787LR.png";
import  services2   from"../../car-images/services-section/637304067312692850GM (1).png";
import  services3   from"../../car-images/services-section/637317836340620662YG.jpg";
import services4 from'../../car-images/services-section/637323322785646322PG.jpg';
import services5 from'../../car-images/eclipse_cross.jpg';
import services6 from'../../car-images/xpander-2019-range-page.jpg';
import aboutBackground from'../../car-images/00-mercedes-amg-inside-amg-series-2560x1440.png';
import icon1 from'../../car-images/maintenance-service-1-gray.jpg';
import icon2 from'../../car-images/car-disc-1-gray.jpg';
import icon3 from'../../car-images/car-leasing-1-gray.jpg';
import brand1 from'../../car-images/chevrolet.png';
import brand2 from'../../car-images/opel.png';
import brand3 from'../../car-images/mazda.png';
import brand4 from'../../car-images/toyota.png';
import brand5 from'../../car-images/hyundai.png';
import brand6 from'../../car-images/bmw.png';
import brand7 from'../../car-images/geely.png';
import brand8 from'../../car-images/renault.png';
import brand9 from'../../car-images/volks-wagen.png';
import { useEffect, useState } from 'react';
import TestCar from '../test-car/TestCar';
const Home = () => {
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [phone , setPhone] = useState('');
    const [message , setMessage] = useState('');

    SwiperCore.use([Autoplay , Pagination , Navigation]);
    useEffect(()=>{
        AOS.init({duration: 1500});
    },[]);
    const handleSubmit = (e)=>{
        e.preventDefault();
        const requests = JSON.parse(localStorage.getItem('Requests')) || [] ;
        const id = (requests.length)+1;
        const requestMessage = {id , name , email , phone , message};
        requests.push(requestMessage);
        localStorage.setItem("Requests", JSON.stringify(requests));
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        console.log(requests);
    }
    return (  
        <div className="home">
            <div className="home__slider">
                <Swiper
                    tag="section"
                    wrapperTag="ul"
                    autoplay
                    pagination
                    navigation
                    spaceBetween={0}
                    slidesPerView={1}
                    scrollbar={{ draggable: true }}>
                        <SwiperSlide tag="li">
                            <img alt="" src={slider}/>
                            <div className="slider-text">
                                <div>
                                    <h3>?????????? ???? ???????? ??????????????</h3>
                                    <p>?????????? ?????????? ???????? ?????????? ???????????? ?????????????? ?????????????? ???????????? ???? ?????????????????????? ???????????????? </p>
                                    <Link to="/rentcar">
                                    ?????????? ????????????
                                    <span><FaChevronLeft/></span>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide tag="li">
                            <img alt="" src={slider2}/>
                            <div className="slider-text">
                                <div>
                                    <h3>??????????</h3>
                                    <p>
                                    ???????? ?????? ???????????? ?????? ?????????????? ???????????????? ???????? ???????? ???????? ?????????? ???????????????? ?????? ???????????? ???? ???????? ?????????????????? ?????????????????? ???????????????? ???????? ????????????.</p>
                                    <Link to="/about">
                                            ???????? ??????????
                                        <span><FaChevronLeft/></span>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide tag="li">
                            <img alt="" src={slider3}/>
                            <div className="slider-text">
                               <div>
                                    <h3>?????????? ??????????</h3>
                                    <p>???? ???? ???????? ?????????? ???????????? ???????????? ???????????????? ???? ???????????? ?????????????? ??????????. ???? ???? ???????? ???? ???????????? ???????? ???????????? ??????.</p>
                                    <Link to="/sellcar">
                                    ???????? ?????????? ??????????????
                                    <span><FaChevronLeft/></span>
                                    </Link>
                               </div>
                            </div>
                        </SwiperSlide>
                </Swiper>
            </div>{/************end of Slider*******/}
            <div className="test-car">
                <TestCar/>
            </div>{/************end of Test Car*******/}
            <div className="services">
                <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="services__sell" data-aos="fade-left">
                            <Swiper
                            tag="section"
                            wrapperTag="ul"
                            autoplay
                            spaceBetween={0}
                            slidesPerView={1}
                            scrollbar={{ draggable: true }}>
                                <SwiperSlide tag="li"><img alt="" src={services1}/></SwiperSlide>
                                <SwiperSlide tag="li"><img alt="" src={services2}/></SwiperSlide>
                                <SwiperSlide tag="li"><img alt="" src={services3}/></SwiperSlide>
                            </Swiper>
                            <div className="services__rent__details">
                                <div>
                                    <h3> ???????? ?????? ???????????? ??????????????</h3>
                                    <p>?????? ?????????? ???????????? ?????????? ???????????? ?????????????? ???????? ??????????. ?????? ?????????? ???????? ???????? ?????????????????? ?? ???????? ?????????? ?????????? ?? ???? ?????? ???????? ???? ??????????
                                    ?????? ???????????? ???????????? ???????? ???????? ???????? ???????????????? ?? ???????? ????????????.</p>
                                    <Link to="/sellcar">
                                        ?????????? ???????????? ????????????
                                        <span><FaChevronLeft/></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="services__rent" data-aos="fade-right">
                        <Swiper
                            tag="section"
                            wrapperTag="ul"
                            autoplay
                            spaceBetween={0}
                            slidesPerView={1}
                            scrollbar={{ draggable: true }}>
                                <SwiperSlide tag="li"><img alt="" src={services4}/></SwiperSlide>
                                <SwiperSlide tag="li"><img alt="" src={services5}/></SwiperSlide>
                                <SwiperSlide tag="li"><img alt="" src={services6}/></SwiperSlide>
                            </Swiper>
                            <div className="services__rent__details">
                                <div>
                                    <h3>???????????????? ?????????? ?? ?????????????? ????????</h3>
                                    <p> ?????? ?????? ???????????? ???? ?????????? ???? ?????????????? ???????????? ?????????? ?????????? ?????????? ????????????. ???????????? ?????????? ?????????? ???????????? ?????? ???????? ???????????? ???????????? ?????? ???????????? ???? ?????????? ?????? ?????????????? ???????????? ??????????????</p>
                                    <Link to="/rentcar">
                                        ?????????? ???????????? ??????????????
                                        <span><FaChevronLeft/></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>{/************end of Test Car*******/}
            <div className="who-we-are">
                <div className="who-we-are__img">
                    <img alt="" src={aboutBackground}/>
                    <div className="header__opacity"></div>
                </div>
                <div className="container">
                <div className="who-we-are__info">
                    <h1>???????? ??????</h1>
                    <p>???????? ?????? ?????????? ?????? ?????????? ???????? ?????????? ???????? ?????????????? ???? ?????????? ???????? ?????????????????? ?????????????? ???????????? ?????? ???? ???? ?????????? ???????????? ???????????????? ??????????????. ?????????????????? ?????????? ???? ???????? ?????????? ?????????? ???????????????? ?????????????? ?????????????? ?? ?????????? ???????? ?????????? ???? ???????? ?????????? ?????????????? ???????????????? ???? ?????????? ??????????. ?????????? ?????????? ?????????? ???????????????? ?????????? ???? ???????????? ???? ???????? ???????????????? ???????????????? ???????????????? ???????? ?????????? ???????? ???????????????? ???????????? ?????? ???????? ???????????? ???? ??????????. ?????????? ?????????? ???????? ???? ???? ???????? ???????????????? ???????????????? ???????????????? ?????? ???????? ?????? ?????????? ???????? ???????????? ?????????????????? ??????????????. ???????? ???????????? ?????? ???????????????? ?????????? ?????????????? ?????? ???????? ?????????????? ???????????? ???????????????????? ??????????????. ???? ???????? ???? ?????????????? ?????????? ???????????? ?????????? ???? ?????????? ?????????? ?????? ?????????????? ?????? ?????????? ???? ???????? ?????????? ????????????.
                    </p>
                </div>
                <div className="choos-us-header text-center"><h3> ?????????? ???????? ?????????????? ????????????????</h3></div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div  className="choos-us " data-aos="slide-up">
                            <div className="choos-us-icon">
                                <img alt="" src={icon1}/>
                            </div>
                            <p>?????????? ?????????????? ???? ???????? ?????????? ?????????? ??????????????</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div  className="choos-us" data-aos="slide-up">
                            <div className="choos-us-icon">
                                <img alt="" src={icon2}/>
                            </div>
                            <p>?????????? ?????????????? ???? ???? ?????? ???? ?????????? ???????? ??????????????</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 m-auto">
                        <div  className="choos-us" data-aos="slide-up">
                            <div className="choos-us-icon">
                                <img alt="" src={icon3}/>
                            </div>
                            <p>???????? ?????????? ?????????????? ?????????? ?????????? ???? ??????????????</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>{/************end of who we are*******/}
            <div className="contact-us">
                <div className="contact-us__background">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className="contact-us__info">
                            <h3>???????? ??????</h3>
                            <p>?????????????? ?????? ?? ?????? ???????????? ?????? ??????</p>
                            <div>
                                <ul>
                                    <li><span><FaPhone/></span><Link to="tel:5554280940">+5554280940</Link></li>
                                    <li><span><FaEnvelope /></span><Link to="mailto:someone@yoursite.com">someone@yoursite.com</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="contact-form">
                            <form className="row g-3" onSubmit={handleSubmit}>
                                <div className="col-md-6">
                                    <label htmlFor="inputName" className="form-label"> ??????????*</label>
                                    <input type="text" className="form-control" id="inputName" value={name} onChange={(e)=> setName(e.target.value)} required />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPhone" className="form-label">????????????????*</label>
                                    <input type="phone" className="form-control" id="inputPhone" value={phone} onChange={(e)=> setPhone(e.target.value)} required maxLength="11" minLength="11"/>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="inputEmail4" className="form-label">??????????????*</label>
                                    <input type="email" className="form-control" id="inputEmail4" value={email} onChange={(e)=> setEmail(e.target.value)} required v/>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="inputMessage" className="form-label">????????????????*</label>
                                    <textarea className="form-control" col="10" row="8" value={message} onChange={(e)=> setMessage(e.target.value)} required ></textarea>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn">???????? ??????</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>{/**********end of contact us******/}
            <div className="brands">
                <div className="brands-header text-center">
                    <h3>???????????????? ????????????????</h3>
                </div>
                <Swiper
                    breakpoints={{
                        1024:{
                        slidesPerView: 7,
                        },
                        768: {
                        slidesPerView: 4,
                        },
                        320: {
                        slidesPerView: 2,
                        },
                    }}
                    tag="section"
                    wrapperTag="ul"
                    autoplay
                    spaceBetween={30}
                    slidesPerView={7}
                    scrollbar={{ draggable: true }}>
                        <SwiperSlide tag="li">
                            <img alt="" src={brand1}/>
                            <p>????????????????</p>
                        </SwiperSlide>
                        <SwiperSlide tag="li">
                            <img alt="" src={brand2}/>
                            <p>????????</p>
                        </SwiperSlide>
                        <SwiperSlide tag="li">
                            <img alt="" src={brand3}/>
                            <p>??????????</p>
                        </SwiperSlide>
                        <SwiperSlide tag="li">
                            <img alt="" src={brand4}/>
                            <p>????????????</p>
                        </SwiperSlide>
                        <SwiperSlide tag="li">
                            <img alt="" src={brand5}/>
                            <p>??????????????</p>
                        </SwiperSlide>
                        <SwiperSlide tag="li">
                            <img alt="" src={brand6}/>
                            <p>???? ???? ??????????</p>
                        </SwiperSlide>
                        <SwiperSlide tag="li">
                            <img alt="" src={brand7}/>
                            <p>????????</p>
                        </SwiperSlide>
                        <SwiperSlide tag="li">
                            <img alt="" src={brand8}/>
                            <p>????????</p>
                        </SwiperSlide>
                        <SwiperSlide tag="li">
                            <img alt="" src={brand9}/>
                            <p>?????????? ????????</p>
                        </SwiperSlide>
                    </Swiper>
            </div>
        </div>
    );
}
 
export default Home;