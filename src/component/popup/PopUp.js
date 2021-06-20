import { Button , Modal} from 'react-bootstrap';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import {FaPhone , FaEnvelope} from 'react-icons/fa';
import './popup.scss';
const PopUp = ({text}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return ( 
        <div>
            <Button className="btn__background" onClick={handleShow}>
                {text}
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> اتصل بنا</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul>
                        <li><span><FaPhone/></span><Link to="tel:5554280940">+5554280940</Link></li>
                        <li><span><FaEnvelope /></span><Link to="mailto:someone@yoursite.com">someone@yoursite.com</Link></li>
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn__background" onClick={handleClose}>
                    اغلاق
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
     );
}
 
export default PopUp;
