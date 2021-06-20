import './testcar.scss'
import  testCar from "../../car-images/C21_0_19EclipseCross-01-Side.png";
//import Zoom from 'react-img-zoom'
import PopUp from '../popup/PopUp';
const TestCar = () => {
    return (  
        <div className="row">
                    <div className="col-lg-7 col-10">
                        <div className="test-car__image w-100 " data-aos="fade-left">
                            <img alt="" src={testCar}/>
                        </div>
                    </div>
                    <div className="col-lg-5 col-12">
                        <div className="test-car__received w-100">
                            <span>احجز تجربة القيادة</span>
                            <h1>جربها بنفسك</h1>
                            <p>ما هي أفضل طريقة لتقييم سيارتك الجديدة؟ <br />قم بتجربة قيادتها بنفسك.</p>
                            <PopUp text=" احجز تجربة القيادة"/>
                        </div>
                    </div>
        </div>
    );
}
 
export default TestCar;