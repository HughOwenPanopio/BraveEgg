import Header from './common/Header'
import './App.css'
import Cannabis from './components/cannabis/Cannabis'
import LeadingBrands from './components/leadingbrands/LeadingBrands'
import Services from './components/serviceOffered/Services'
import Stories from './components/story/Stories'
import TechPartners from './components/techPartners/TechPartners'
import Consultation from './components/consultation/Consultation'


function App() {

  return (
    <>
      <div className='main'>
        <Header />
        <Cannabis />
        <LeadingBrands />
        <Services />
        <Stories />
        <TechPartners />
        <Consultation />
      </div>
    </>
  )
}

export default App
