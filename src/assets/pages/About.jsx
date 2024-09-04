import './About.css'
import { AiFillFacebook, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

function About() {
    return(
        <>
        <div className='about-container relative'>
            <Header />
            <div className='box1 md:p-12 p-5'>
            <div className=' w-full h-full text-left flex justify-center items-center flex-col'>
                <div className=' w-full'>
                    <p className=' md:text-2xl font-medium text-gray-700'>HELLO WORLD!</p>
                    <h1 className=' md:text-5xl text-3xl font-semibold text-gray-800 py-2'>Hi, I'm <span style={{color: "#ff3434"}}>Renz Pajarito</span></h1>
                    <h3 className=' md:text-3xl text-xl font-medium' style={{color: "#ff4848"}}><i style={{color: "#282828"}}>&#60;&#47;&#62; </i>Web Developer</h3>
                    <p className=' md:text-lg text-md font-medium text-gray-700 p-2'>
                    A passionate web developer and designer with a talent for creating engaging and interactive web experiences. 
                    I specialize in building dynamic and visually appealing websites that are both functional and user-friendly, 
                    combining creativity with a strong focus on user experience.
                    </p>
                </div>
                <div className=' w-full m-4 pl-4 font-normal md:text-lg text-md text-gray-700'>
                    <p>&#62; <span>Birthday:</span> July 8, 2005</p>
                    <p>&#62; <span>Age: </span>19</p>
                    <p>&#62; <span>Phone:</span> +63 9123456789</p>
                    <p>&#62; <span>Country:</span> Philippines</p>
                    <p>&#62; <span>Email:</span> zerncodes@gmail.com</p>
                </div>
                <div className=' social-media w-full flex justify-center items-center text-gray-400'>
                    <a href='#' className=' text-4xl p-1 m-3 hover:text-gray-700'>
                        <AiFillFacebook/>
                    </a>
                    <a href='#' className=' text-4xl p-1 m-3 hover:text-gray-700'>
                        <AiFillLinkedin/>
                    </a>
                    <a href='#' className=' text-4xl p-1 m-3 hover:text-gray-700'>
                        <AiFillGithub/>
                    </a>
                </div>
            </div>
            </div>
            <div className='box2'>
                <div className='border w-full h-full grid md:grid-cols-4 md:grid-rows-2 grid-cols-3 gap-3'>
                    <div className=' md:col-span-4 col-span-4'></div>
                    <div className=''></div>
                    <div className=' md:col-span-2'></div>
                    <div className=''></div>
                </div>
            </div>
            <Footer />
        </div>
        </>
    )
}

export default About