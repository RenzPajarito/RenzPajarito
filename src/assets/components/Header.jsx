import './Component.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaHamburger } from 'react-icons/fa'

function Header() {
    const navigate = useNavigate()
    const [isNavVisible, setIsNavVisible] = useState(true)

    const handleHomeClick = () => {
        navigate('/')
    }

    const handleAboutClick = () => {
        navigate('/About')
    }

    const handleContactClick = () => {
        navigate('/Contact')
    }

    const handlePortfolioClick = () => {
        navigate('/Portfolio')
    }

    const handleCertificatesClick = () => {
        navigate('/Certificates')
    }

    const toggleNav = () => {
        setIsNavVisible((prev) => !prev)
    }

    return (
        <>
            <header className='header flex justify-between items-center px-8'>
                <h1
                    className='md:text-2xl font-semibold uppercase cursor-pointer'
                    style={{ color: '#ff3460' }}
                    onClick={handleHomeClick}
                >
                    Zern Codes
                </h1>
                <FaHamburger
                    className='hamburger cursor-pointer text-3xl'
                    style={{ color: '#ff3460' }}
                    onClick={toggleNav}
                />
                <nav className={isNavVisible ? 'visible' : 'hidden'}>
                    <a className='px-2 py-3 md:text-l text-sm font-semibold text-gray-700 cursor-pointer'
                        onClick={handleHomeClick}
                    >
                        Home
                    </a>
                    <a className='px-2 py-3 md:text-l text-sm font-semibold text-gray-700 cursor-pointer'
                        onClick={handleAboutClick}
                    >
                        About
                    </a>
                    <a className='px-2 py-3 md:text-l text-sm font-semibold text-gray-700 cursor-pointer'
                        onClick={handlePortfolioClick}
                    >
                        Portfolio
                    </a>
                    {/* <a className='px-2 py-3 md:text-l text-sm font-semibold text-gray-700 cursor-pointer'
                        onClick={handleCertificatesClick}
                    >
                        Certificates
                    </a> */}
                    <a className='px-2 py-3 md:text-l text-sm font-semibold text-gray-700 cursor-pointer'
                        onClick={handleContactClick}
                    >
                        Contact
                    </a>
                </nav>
            </header>
        </>
    )
}

export default Header