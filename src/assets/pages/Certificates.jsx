import './Certificates.css'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import HTMLCertificate from '../images/certificates/HTML_certificate.jpg'
import CSSCertificate from '../images/certificates/CSS_certificate.jpg'
import JSCertificate from '../images/certificates/JavaScript_certificate.jpg'
import JavaCertificate from '../images/certificates/Java_certificate.jpg'
import PHPCertificate from '../images/certificates/PHP_certificate.jpg'
import SQLCertificate from '../images/certificates/SQL_certificate.jpg'

function Certificates() {
    return(
        <>
        <div className='certificates-container'>
            <Header />
            <div className='certificate-box'>
                <div className='relative'>
                    <img src={HTMLCertificate} />
                </div>
                <div className='relative'>
                    <img src={CSSCertificate} />
                </div>
                <div className='relative'>
                    <img src={JSCertificate} />
                </div>
                <div className='relative'>
                    <img src={HTMLCertificate} />
                </div>
                <div className='relative'>
                    <img src={CSSCertificate} />
                </div>
                <div className='relative'>
                    <img src={JSCertificate} />
                </div>
            </div>
            <Footer />
        </div>
        </>
    )
}

export default Certificates