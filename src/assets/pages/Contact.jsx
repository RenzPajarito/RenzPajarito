import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import './Contact.css'
import ContactImg from '../images/contact.jpg'
import ContactForm from '../components/ContactForm.jsx'

function Contact() {
    return(
        <>
        <div className='contact-container relative'>
            <Header />
            <div className='box1 mt-12 sm:mt-0'>
                <img src={ContactImg} className=' h-full object-cover object-right'/>
            </div>
            <div className='box2'>
                <ContactForm />
            </div>
            <Footer />
        </div>
        </>
    )
}

export default Contact