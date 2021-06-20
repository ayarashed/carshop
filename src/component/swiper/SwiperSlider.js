import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore , {Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import './swiper.scss';
import PopUp from "../popup/PopUp";
const SwiperSlider = ({cars , title}) => {
    SwiperCore.use([Autoplay]);
    return (
        <div className="car-list">
            <h5>{title}</h5>
            <Swiper
                breakpoints={{
                    1024:{
                    slidesPerView: 3,
                    },
                    768: {
                    slidesPerView: 2,
                    },
                    320: {
                    slidesPerView: 1,
                    },
                }}
                tag="section"
                wrapperTag="ul"
                autoplay
                spaceBetween={5}
                slidesPerView={3}
                scrollbar={{ draggable: true }}>
                {
                    cars.map((car)=>(
                        <SwiperSlide tag="li"   key={car.id}>
                        <Link to={car.price? `/rentcarview/${car.id}` :`/carview/${car.id}`}>
                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={car.imgsrc} alt="..."/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{car.name}</h5>
                                            <span>{car.model}</span>
                                            <span>{car.category}</span>
                                            <span>{car.price}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <PopUp text={car.price? `حجز` : `استعلام`}/>
                        </SwiperSlide>
                        )
                    )
                }
            </Swiper>
        </div>
    );
}
export default SwiperSlider;