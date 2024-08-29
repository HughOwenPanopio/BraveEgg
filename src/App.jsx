import Header from './common/Header'
import './App.css'
import Cannabis from './components/cannabis/Cannabis'
import LeadingBrands from './components/leadingbrands/LeadingBrands'
import Services from './components/serviceOffered/Services'


function App() {

  return (
    <>
      <div className='main'>
        <Header />
        <Cannabis />
        <LeadingBrands />
        <Services />
      </div>
    </>
  )
}

export default App
