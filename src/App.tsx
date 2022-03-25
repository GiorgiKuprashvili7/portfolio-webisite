import React from 'react'
import AboutMe from './components/aboutMe/AboutMe'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import HeroSection from './components/heroSection/HeroSection'
import LanguegesDecor from './components/languagesDecor/LanguegesDecor'
import Projects from './components/projects/Projects'
import SkillsetSection from './components/skillsetSection/SkillsetSection'
import ClipLoader from 'react-spinners/ClipLoader'
import { useState, useEffect } from 'react'

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <div className="App">
      {loading ? (
        <div className="loadingScreen">
          <ClipLoader color={'white'} loading={loading} size={60} />
        </div>
      ) : (
        <>
          <Header />
          <HeroSection />
          <LanguegesDecor />
          <AboutMe />
          <SkillsetSection />
          <Projects />
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
