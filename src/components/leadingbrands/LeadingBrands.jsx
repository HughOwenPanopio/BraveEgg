import cannaWholesalers from '../../assets/cannaWholesalers.png'
import destinoFarms from '../../assets/destinoFarms.png'
import teeter from "../../assets/teeter.png"
import './style.css'

function LeadingBrands() {
  return (
    <div>
      <div className="container-fluid brandContent">
        <div className="row brands">
          <div className="col brandText">trusted by leading cannabis brands</div>
          <div className="col"><img src={teeter} alt="teeter" className='teeter' /></div>
          <div className="col"><img src={cannaWholesalers} alt="cannaWholesalers" className='cannaWholesalers' /></div>
          <div className="col"><img src={destinoFarms} alt="destinoFarms" className='destinoFarms' /></div>
        </div>
      </div>
    </div>
  )
}

export default LeadingBrands

