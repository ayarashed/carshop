import {useParams} from 'react-router-dom';
import UseFetch from '../UseFetch';
import { FaGasPump , FaCarBattery} from 'react-icons/fa';
import { GiCarSeat , GiSpeedometer} from 'react-icons/gi';
import { HiOutlineMusicNote} from 'react-icons/hi';
import { TiWeatherPartlySunny , TiWeatherSnow} from 'react-icons/ti';
import {FiPhoneCall} from 'react-icons/fi';
import {RiRemoteControlFill} from 'react-icons/ri';
import armrest from '../../car-images/arm-rest.jpg';
import panoramic from '../../car-images/panoramic.jpg';
import touchscreen from '../../car-images/touch-screen.png';
import PopUp from '../popup/PopUp';
import { useState } from 'react';
import './carview.scss';
import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
const CarView = () => {
    const {id} = useParams();
    const {data : car , isLoading , error} = UseFetch('http://localhost:8000/carsForSell/'+id);
    const [index , setIndex] = useState(0);
    const myRef = React.createRef();
    const handleClick = (index)=>{
        setIndex(index);
        const activeImages = myRef.current.children;
        for(let i=0 ; i< activeImages.length;i++){
            activeImages[i].className = activeImages[i].className.replace("act","col-3");
        }
        activeImages[index].className="act col-3";
    }
    return ( 
        <div className="car-details">
            <div className="container-fluid">
                <div className="car-details__preview">
                    {error && <div>{error}</div>}
                    {isLoading && <div>loading......</div>}
                    {car &&
                    <div className="details" key={id}>
                        <h1>مواصفات العربية</h1>
                        <div className="row">
                            <div className="col-md-6 col-12 order-2 order-md-1">
                                <div className="box">
                                    <h3>{car.name}</h3>
                                    <p><span>الفئة:</span>{car.category}</p>
                                    <p><span>الموديل:</span>{car.model}</p>
                                </div>
                                <div className="colors">
                                    {
                                        car.colors.map((color , index )=>(
                                            <button style={{backgroundColor: color , border : `1px solid ${color}`}} key={index}></button>
                                        ))
                                    }
                                </div>
                                <div className="thumb">
                                    <div className="row" ref={myRef}>
                                        {
                                        car.smallsrc.map((img , index)=>(
                                            <div className="col-3" key={index}>
                                                <img src={img} alt="" onClick={()=>handleClick(index)}/>
                                            </div>
                                            )) 
                                        }
                                    </div>
                                </div>
                                <PopUp text="استعلام"/>
                            </div>
                            <div className="col-md-6 col-12 order-1 order-md-2">
                                <div className="big-img">
                                <Zoom>
                                    <img src={car.smallsrc[index]} alt="" width="500"/>
                                </Zoom>
                                </div>
                                <div className="properties">
                                    <ul>
                                        <li><span><GiCarSeat/></span><p>عدد المقاعد</p></li>
                                        <li><span><FaCarBattery/></span><p>البطارية</p></li>
                                        <li><span><GiSpeedometer/></span><p>السرعة</p></li>
                                        <li><span><FaGasPump/></span><p>البنزين</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    }
                </div>{/*end of car properties**********/}
                <div className="interior-design">
                    <h2>تصميم خارجي و داخلى ذكي</h2>
                    <div className="row">
                        <div className="col-lg-4 offset-md-1 col-12 order-2 order-lg-1">
                            <div className="design">
                                <h3>التصميم</h3>
                                <p>نظام التشغيل الذكي ذو المستوى العالمي الحصري لشركة ، يسمح لك وللسيارة بالتواصل معًا. ستعمل التكنولوجيا على تحسين كل قيادة ، وجعل كل فحص سهل ، وجعل كل أمر سهل كما تريد ، وربط كل نمط حياة ببعضها البعض. </p>
                            </div>
                            <div className="inside-design">
                                <h3>التصميم الداخلى</h3>
                                <p>تجمع المقصورة بين تصميم المستوى التالي والإنتاج الدقيق. يتناسب كل عنصر تمامًا مع موضوع الرياضة الفاخرة: من المقصورة ذات اللونين ، وحدة التحكم المزينة خصيصًا بمواد SOFT TOUCH وتأتي مع شاشة لمس مقاس 10 بوصات</p>
                            </div>
                        </div>
                        <div className="col-lg-7 col-12 order-1 order-lg-2">
                            <div className="images">
                                <div className="row">
                                    <div className="col-6">
                                        <div style={{height:"100%"}}>
                                            <img alt="" src={panoramic} style={{height:"100%"}}/>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="row">
                                            <div className="col-12" style={{marginBottom:"10px"}}><img alt="" src={armrest}/></div>
                                            <div className="col-12"><img alt="" src={touchscreen}/></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="icons">
                        <ul>
                            <li><div><span><RiRemoteControlFill/></span><p>تحكم عن بعد</p></div></li>
                            <li><div><span><HiOutlineMusicNote/></span><p>موسيقى اون لاين</p></div></li>
                            <li><div><span><FiPhoneCall/></span><p>مكالمات</p></div></li>
                            <li><div><span><TiWeatherSnow/></span><p>مكيف</p></div></li>
                            <li><div><span><TiWeatherPartlySunny/></span><p>تنبأ بالطقس</p></div></li>

                        </ul>
                    </div>
                </div>
    
            </div>
        </div>
    );
}
 
export default CarView;