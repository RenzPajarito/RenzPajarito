import { AiFillFacebook, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { GoScreenFull } from 'react-icons/go'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Coding from '../icons/coding.png'
import Creative from '../icons/graphic-designer.png'
import MobileDev from '../icons/mobile-development.png'
import Port1 from '../images/1port.png'
import Port2 from '../images/2port.jpg'
import Port3 from '../images/3port.jpg'
import Port4 from '../images/4port.jpg'

function Home() {
  const navigate = useNavigate()

  const handleAboutClick = () => {
    navigate('/About')
  }

  const handlePortfolioClick = () => {
    navigate('/Portfolio')
  }

  return (
    <>
    <div className="home-container">
    <Header />
    <div className=' about flex justify-center items-center flex-col mt-12 md:mt-0'>
      <h2 className=' about-me relative font-semibold text-xl uppercase m-4 text-gray-700 cursor-pointer'
          onClick={handleAboutClick}>
        about
      <hr/>
      </h2>
      <div className=' w-full h-full text-left p-4 flex justify-center items-center flex-col'>
        <div className=' w-full'>
          <p className=' md:text-xl font-medium text-gray-700'>HELLO WORLD!</p>
          <h1 className=' md:text-4xl text-3xl font-semibold text-gray-800 py-1'>Hi, I'm <span style={{color: "#ff3434"}}>Renz Pajarito</span></h1>
          <h3 className=' md:text-2xl text-xl font-medium' style={{color: "#ff4848"}}>
            <i style={{color: "#282828"}}>&#60;&#47;&#62; </i>
            Web Developer
          </h3>
        </div>
        <div className=' social-media w-full flex justify-center items-center mt-4 text-gray-400'>
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
    <div className='portfolio relative flex justify-center items-center flex-col'>
      <h2 className=' font-semibold text-xl uppercase m-4 text-gray-700'>portfolio<hr/></h2>
      <div className='portfolio-box w-full h-full grid grid-cols-2 md:grid-cols-4 gap-3 p-5'>
        <div className='port1 relative shadow-md p-3 cursor-pointer'>
          <div className='img-box h-full'>
            <img src={Port1} alt='Portfolio' className=' w-full h-full object-cover rounded-lg'/>
          </div>
          <div className='overlay w-full h-full absolute top-0 left-0 p-6'>
            <h1 className='md:text-2xl text-lg font-semibold text-gray-300'>Mortgage Calculator</h1>
            <p className='md:text-lg text-sm text-left p-2 text-gray-300'>Mortgage Calculator app that calculates monthly payments based on.</p>
          </div>
        </div>
        <div className='port2 relative shadow-md p-3 cursor-pointer'>
          <div className='img-box h-full'>
            <img src={Port2} alt='Portfolio' className=' w-full h-full object-cover rounded-lg'/>
          </div>
          <div className='overlay w-full h-full absolute top-0 left-0 p-6'>
            <h1 className='md:text-2xl text-xl font-semibold text-gray-300'>Title</h1>
            <p className='md:text-lg text-sm text-left p-2 text-gray-300'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className='port3 relative shadow-md p-3 cursor-pointer'>
          <div className='img-box h-full'>
            <img src={Port3} alt='Portfolio' className=' w-full h-full object-cover rounded-lg'/>
          </div>
          <div className='overlay w-full h-full absolute top-0 left-0 p-6'>
            <h1 className='md:text-2xl text-xl font-semibold text-gray-300'>Title</h1>
            <p className='md:text-lg text-sm text-left p-2 text-gray-300'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className='port4 shadow-md p-3'>
          <div className=' relative img-box h-full cursor-pointer'>
            <img src={Port4} alt='Portfolio' className=' w-full h-full object-cover rounded-lg'/>
            <div className='fs-portfolio-box'>
              <GoScreenFull className='fs-portfolio text-4xl text-gray-200 cursor-pointer ' 
                    onClick={handlePortfolioClick}/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='skills flex justify-center items-center flex-col'>
      <h2 className=' font-semibold text-xl uppercase m-4 text-gray-700'>skills<hr/></h2>
          <div className=' w-full h-full p-4'>
            <div className='html-progress relative w-full h-11 mb-2 flex justify-center items-center flex-col'>
                <span className=' text-sm font-semibold text-gray-600 '>HTML 100%</span>
                <div className='html relative w-full h-6 shadow-md rounded-2xl' style={{borderColor: '#303030'}}></div>
            </div>
            <div class='css-progress relative w-full h-11 mb-2 flex justify-center items-center flex-col'>
                <span className=' text-sm font-semibold text-gray-600 '>CSS 90%</span>
                <div className='css relative w-full h-6 shadow-md rounded-2xl' style={{borderColor: '#303030'}}></div>
            </div>
            <div class='js-progress relative w-full h-11 mb-2 flex justify-center items-center flex-col'>
                <span className=' text-sm font-semibold text-gray-600 '>JAVASCRIPT 70%</span>
                <div className='javascript relative w-full h-6 shadow-md rounded-2xl' style={{borderColor: '#303030'}}></div>
            </div>
            <div class='react-progress relative w-full h-11 mb-2 flex justify-center items-center flex-col'>
                <span className=' text-sm font-semibold text-gray-600 '>REACT 1%</span>
                <div className='react relative w-full h-6 shadow-md rounded-2xl' style={{borderColor: '#303030'}}></div>
            </div>
            <div class='tailwind-progress relative w-full h-11 mb-2 flex justify-center items-center flex-col'>
                <span className=' text-sm font-semibold text-gray-600 '>TAILWIND 80%</span>
                <div className='tailwind relative w-full h-6 shadow-md rounded-2xl' style={{borderColor: '#303030'}}></div>
            </div>
          </div>
    </div>
    <div className='service flex justify-center items-center flex-col'>
      <h2 className=' font-semibold text-xl uppercase m-4 text-gray-700'>service<hr/></h2>

      <div className='w-full h-full p-2'>
        <div className=' flex justify-center items-center rounded-lg px-2'>
          <img src={Coding} alt='Coding Icon' className=' md:w-14 w-12 mr-4 rounded-lg'></img>
          <div className=' w-full text-left'>
            <h3 className=' md:text-lg text-md font-semibold text-gray-700 uppercase'>Web Design</h3>
            <p className=' text-xs font-medium text-gray-500'>
              Building responsive and dynamic websites with clean code and modern design. 
              I specialize in creating user-friendly web experiences tailored to your business needs.
            </p>
          </div>
        </div>
        <div className=' flex justify-center items-center rounded-lg px-2 md:my-5 my-2'>
          <img src={Creative} alt='Creative Icon' className=' md:w-14 w-12 mr-4 rounded-lg'></img>
          <div className=' w-full text-left'>
            <h3 className=' md:text-lg text-md font-semibold text-gray-700 uppercase'>Creative Design</h3>
            <p className=' text-xs font-medium text-gray-500'>
              Transforming ideas into visually stunning designs. 
              From branding to digital graphics, I bring creativity and precision to make your vision come to life.
            </p>
          </div>
        </div>
        <div className=' flex justify-center items-center rounded-lg px-2'>
          <img src={MobileDev} alt='Mobile Development Icon' className=' md:w-14 w-12 mr-4 rounded-lg'></img>
          <div className=' w-full text-left'>
            <h3 className=' md:text-lg text-md font-semibold text-gray-700 uppercase'>Mobile Development</h3>
            <p className=' text-xs font-medium text-gray-500'>
            Developing intuitive and functional mobile apps that deliver seamless user experiences on both Android and iOS platforms. 
            I create solutions that keep users engaged and connected.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className='personal-talent flex justify-center items-center flex-col'>
      <h2 className='font-semibold text-xl uppercase m-4 text-gray-700'>personal-talent<hr/></h2>
      <div className='w-full h-full text-left pl-4'>
        <ul className=' text-base font-medium text-gray-700'>
          <li>&#62; Performing Samurai</li>
          <li>&#62; Performing Wushu</li>
          <li>&#62; Digital Artist</li>
          <li>&#62; Traditional Artist</li>
          <li>&#62; Drawing</li>
          <li>&#62; Song Composer</li>
          <li>&#62; Playing Ukulele</li>
          <li>&#62; Beatbox</li>
          <li>&#62; Singer</li>
          <li>&#62; Multi Artist</li>
          <li>&#62; Photo Manipulation</li>
        </ul>
      </div>
    </div>
    <Footer />
    </div>
    </>
  )
}

export default Home
