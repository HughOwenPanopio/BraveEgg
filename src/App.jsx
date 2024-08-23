import Header from './common/Header'
import './App.css'
import Cannabis from './components/cannabis/Cannabis'
import LeadingBrands from './components/leadingbrands/LeadingBrands'


function App() {

  return (
    <>
      <div className='main'>
        <Header />
        <Cannabis />
        <LeadingBrands />
      </div>
    </>
  )
}

export default App
