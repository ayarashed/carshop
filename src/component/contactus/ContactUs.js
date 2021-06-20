import contactImg from "../../car-images/contact-us-customer-support-hotline-phone.jpg";
import {FaMapMarkerAlt} from 'react-icons/fa';
import './contactus.scss';
import { useState } from "react";

const ContactUs = () => {
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [phone , setPhone] = useState('');
    const [message , setMessage] = useState('');
    const [address , setAddress] = useState('');
    const [inquire , setInquire] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        const requests = JSON.parse(localStorage.getItem('Requests')) || [] ;
        const id = (requests.length)+1;
        const requestMessage = {id , name , email , phone , address , inquire, message};
        requests.push(requestMessage);
        localStorage.setItem("Requests", JSON.stringify(requests));
        setName('');
        setEmail('');
        setPhone('');
        setAddress('');
        setMessage('');
        console.log(requests);
    }

    return ( 
        <div className="contact">
            <header>
                <div className="header__img">
                    <img alt=".." src={contactImg}/>
                    <div className="header__opacity"></div>
                </div>
                <div className="contact-information d-none d-md-block">
                    <div className="row">
                        <div className="col-8">
                            <h3>اسم الشركة</h3>
                            <ul>
                                <li>العنوان : لتأجير السيارات، ريتيل 04، فندق مايسون دو فيل بريز </li>
                                <li>خدمة العملاء: 557758799+</li>
                                <li>الايميل: nameofcompany223@yahoo.com</li>
                            </ul>
                        </div>
                        <div className="col-4">
                                <p><span><FaMapMarkerAlt/>موقعنا</span></p>
                                <div className="map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.788711189075!2d55.27434068567323!3d25.176611238715196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d37e893089%3A0x6b6496a9f537470a!2sSpeedy%20Drive%20Car%20Rental%20Dubai!5e0!3m2!1sar!2seg!4v1623795242792!5m2!1sar!2seg"  style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe>
                                </div>
                                
                        </div>
                    </div>
            </div>{/*********end of contact information********/}
            </header>{/******************end of header*************/}

            <div className="form-to-contact">
                <div className="container">
                    <div className="contact-form">
                        <h3>بالنسبة لنا ، أنت دائمًا شخص مهم</h3>
                        <form className="row g-3" onSubmit={handleSubmit}>
                            <div className="col-md-6">
                                <label htmlFor="inputName" className="form-label"> الاسم*</label>
                                <input type="text" className="form-control" id="inputName" value={name} onChange={(e)=> setName(e.target.value)} required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputPhone" className="form-label">التليفون*</label>
                                <input type="phone" className="form-control" id="inputPhone" value={phone} onChange={(e)=> setPhone(e.target.value)} required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputEmail4" className="form-label">الايميل*</label>
                                <input type="email" className="form-control" id="inputEmail4" value={email} onChange={(e)=> setEmail(e.target.value)} required />
                            </div>                            
                            <div className="col-md-6">
                                <label htmlFor="inputAddress" className="form-label">العنوان*</label>
                                <input type="text" className="form-control" id="inputAddress" value={address} onChange={(e)=> setAddress(e.target.value)} required />
                            </div>
                            <div className="col-12">                          
                                <select className="form-select" aria-label="Default select example" value={inquire} onChange={(e)=> setInquire(e.target.value)} required>
                                    <option selected>--اختار استفسارك عن --</option>
                                    <option value="شراء عربية">شراء عربية</option>
                                    <option value="تأخير عربية">تأجير عربية</option>
                                </select>
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputMessage" className="form-label">استفسارك*</label>
                                <textarea className="form-control" col="10" row="15" value={message} onChange={(e)=> setMessage(e.target.value)} required></textarea>
                            </div> 
                            <div className="col-12">
                                <button type="submit" className="btn">ارسل لنا</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ContactUs;