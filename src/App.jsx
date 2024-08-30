import Header from './common/Header'
import './App.css'
import Cannabis from './components/cannabis/Cannabis'
import LeadingBrands from './components/leadingbrands/LeadingBrands'
import Services from './components/serviceOffered/Services'
import Stories from './components/story/Stories'


function App() {

  return (
    <>
      <div className='main'>
        <Header />
        <Cannabis />
        <LeadingBrands />
        <Services />
        <Stories />
      </div>
    </>
  )
}

export default App
