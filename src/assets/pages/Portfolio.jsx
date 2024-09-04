import './Portfolio.css'
import { useState } from 'react'
import { GoScreenFull } from "react-icons/go"
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Port1 from '../images/1port.jpg'
import Port2 from '../images/2port.jpg'
import Port3 from '../images/3port.jpg'
import Port4 from '../images/4port.jpg'
import Port5 from '../images/5port.jpg'
import Port6 from '../images/6port.jpg'
import Port7 from '../images/7port.jpg'

function Portfolio() {
  // State to handle the selected portfolio and modal visibility
  const [selectedPortfolio, setSelectedPortfolio] = useState(null)

  // Function to handle full-screen icon click
  const handleFullScreenClick = (portfolio) => {
    setSelectedPortfolio(portfolio)
  }

  // Function to close the modal
  const handleCloseModal = () => {
    setSelectedPortfolio(null)
  }

  // Array of portfolios with titles and descriptions
  const portfolios = [
    { id: 1, title: 'Portfolio 1', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: Port1 },
    { id: 2, title: 'Portfolio 2', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: Port2 },
    { id: 3, title: 'Portfolio 3', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: Port3 },
    { id: 4, title: 'Portfolio 4', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: Port4 },
    { id: 5, title: 'Portfolio 5', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: Port5 },
    { id: 6, title: 'Portfolio 6', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: Port6 },
    { id: 7, title: 'Portfolio 7', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: Port7 },
  ]

  return (
    <>
      <div className="portfolio-container relative">
        <Header />
        <div className="portfolio-box grid md:grid-cols-3 md:grid-rows-3 gap-1">
          {portfolios.map((portfolio) => (
            <div key={portfolio.id} className={`${portfolio.id === 7 ? 'md:col-span-3' : ''}`}>
              <GoScreenFull
                className="absolute top-0 right-0 text-4xl p-1 bg-gray-100 cursor-pointer"
                onClick={() => handleFullScreenClick(portfolio)}
              />
              <div className="absolute bottom-0 w-full h-24">
                <h1 className="md:text-xl text-md font-semibold uppercase text-gray-200 text-center">
                  {portfolio.title}
                </h1>
                <p className="md:text-md text-xs font-medium text-gray-400 text-center">
                  {portfolio.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Footer />

        {/* Modal for displaying the selected portfolio */}
        {selectedPortfolio && (
          <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-99 backdrop-blur-sm"
          onClick={handleCloseModal} // Close modal when clicking on the overlay
        >
          <div
            className="bg-gray-200 p-5 rounded-lg max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()} // Prevent click inside the modal from closing it
          >
            <button
              className="absolute top-2 right-2 px-2 rounded-lg shadow-lg bg-white text-2xl text-rose-500 font-bold cursor-pointer"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <img 
              src={selectedPortfolio.image}
              className='w-full object-cover mb-2'
              />
            <h2 className="text-2xl text-gray-800 font-bold mb-2">{selectedPortfolio.title}</h2>
            <p className="text-gray-700">{selectedPortfolio.description}</p>
          </div>
        </div>
        )}
      </div>
    </>
  )
}

export default Portfolio