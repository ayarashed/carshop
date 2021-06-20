import { Link } from "react-router-dom";
import PopUp from "../popup/PopUp";
import {FaShippingFast} from 'react-icons/fa';
import { useEffect } from "react";
import AOS from 'aos';
const BestCar = ({cars, title}) => {
    useEffect(()=>{
        AOS.init({duration: 1500});
    },[]);
    return ( 
        <div className="best-car">
            <h3><span><FaShippingFast/></span>{title}</h3>
            <div className="row">
            {
                cars.map((car)=>(
                    <div className="col-md-6" key={car.id}>
                        <div data-aos="fade-left" style={{marginBottom:"20px"}}>
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
                        </div>
                    </div>
                    )
                )
            }
            </div>

        </div>
     );
}
 
export default BestCar;