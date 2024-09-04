import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './assets/pages/Home.jsx'
import About from './assets/pages/About.jsx'
import Portfolio from './assets/pages/Portfolio.jsx'
import Contact from './assets/pages/Contact.jsx'
import Certificates from './assets/pages/Certificates.jsx'

function App() {
  return(
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Portfolio' element={<Portfolio />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Certificates' element={<Certificates />} />
      </Routes>
    </Router>
    </>
  )
}

export default App