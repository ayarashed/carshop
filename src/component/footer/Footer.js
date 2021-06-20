import { FaPhone , FaEnvelope , FaMapMarkerAlt} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../car-images/svg/footeeeer.svg';
import './footer.scss';
const Footer = () => {
    return ( 
        <div className="footer">
            <footer>
                <div className="row">
                    <div className="col-xl-7 col-12">
                        <div className="row">
                            <div className="col-md-4 col-12">
                                <div className="logo">
                                <Link to="/">
                                    <div className="logo">
                                        <img alt="" src={logo}/>
                                    </div>
                                </Link>
                                </div>
                            </div>
                            <div className="col-md-4 col-6">
                                <div>
                                    <ul>
                                        <li><Link to="/">الرئيسية</Link></li>
                                        <li><Link to="/contactus">اتصل بنا</Link></li>
                                        <li><Link to="/about">عن الشركة</Link></li>
                                        {/*<li><Link to="/">العلامات التجارية</Link></li>*/}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4 col-6">
                                <h3>الخدمات</h3>
                                <ul>
                                    <li><Link to="/sellcar">شراء عربيات</Link></li>
                                    <li><Link to="/rentcar">ايجار عربيات</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-12">
                        
                        <div className="row">
                            <div className="col-md-6 col-12">
                            <h3>فرعناالوحيد</h3>
                                <ul>
                                    <li><span><FaPhone/></span><Link to="tel:5554280940">+5554280940</Link></li>
                                    <li><span><FaEnvelope /></span><Link to="mailto:someone@yoursite.com">someone@yoursite.com</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-12">
                                <p><span><FaMapMarkerAlt/>موقعنا</span></p>
                                <div className="map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.788711189075!2d55.27434068567323!3d25.176611238715196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d37e893089%3A0x6b6496a9f537470a!2sSpeedy%20Drive%20Car%20Rental%20Dubai!5e0!3m2!1sar!2seg!4v1623795242792!5m2!1sar!2seg"  style={{border:"0"}} allowFullScreen="" loading="lazy"></iframe>
                                </div>
                        </div>
                        </div>

                    </div>
                </div>
            </footer>
            
        </div>
     );
}
 
export default Footer;