import SwiperSlider from "../swiper/SwiperSlider";
import UseFetch from "../UseFetch";
import sellcar1 from '../../car-images/eclipse_cross.jpg';
import sellcar2 from '../../car-images/xpander-2019-range-page.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore , {Autoplay } from 'swiper';
import { FaCar, FaCarSide , FaTruck , FaTruckPickup , FaTruckMoving} from 'react-icons/fa';
import 'swiper/swiper.scss';
import BestCar from "../best-car/Best-car";
const RentCar = () => {
    const url = 'http://localhost:8001/carsForrent';
    SwiperCore.use([Autoplay]);
    const {data : cars , isLoading , error} = UseFetch(url);
    console.log(url);
    return ( 
            <div className="sell-car">
                <div className="header">
                <Swiper
                    tag="section"
                    wrapperTag="ul"
                    autoplay
                    spaceBetween={0}
                    slidesPerView={1}
                    scrollbar={{ draggable: true }}>
                        <SwiperSlide tag="li"><img alt="" src={sellcar1}/>
                        </SwiperSlide>
                        <SwiperSlide tag="li"><img alt="" src={sellcar2}/></SwiperSlide>
                        <SwiperSlide tag="li"><img alt="" src={sellcar1}/></SwiperSlide>
    
                </Swiper>
                <div className="header__opacity">
                    <div>
                        <h3>السلامة والأمان عندنا لا تقبل المساومة</h3>
                        <span>تُعد سيارتنا أكثر السيارات أمانًا تواصل معنا و لا تقلق</span>
                    </div>
    
                </div>
                </div>{/******end of car*******/}
                <div className="all-sell-car">
                    <div className="row">
                        <div className="col-md-3 col-12">
                            <div className="all-sell-car__filter">
                                <h5>ابحث عن نوعك المفضل</h5>
                                <ul>
                                    <li><span><FaCar/></span>مازدا</li>
                                    <li><span><FaCarSide/></span>بي إم دبليو</li>
                                    <li><span><FaTruck /></span>جيلى</li>
                                    <li><span><FaTruckMoving /></span>رينو</li>
                                    <li><span><FaTruckPickup /></span>شيفرولية</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-9 col-12">
                            <div className="type-bmw-cars">
                                {error && <div>{error}</div>}
                                {isLoading && <div>loading......</div>}
                                {cars && <SwiperSlider cars={cars} title="فولكس فاغن" />}
                            </div>
                            <div className="type-bmw-cars">
                                {error && <div>{error}</div>}
                                {isLoading && <div>loading......</div>}
                                {cars && <SwiperSlider cars={cars} title="سيدان"/>}
                            </div>
                        </div>
                    </div>
                </div>{/******end of section all car****/}
                <div className="most-sell">
                    <div className="Carontainer-fluid">
                        {cars && <BestCar cars={cars} title="الاكثر ايجار لدينا"/>}
                    </div>
                </div>{/*************end most sell*****/}
            </div>
     );
}
 
export default RentCar;