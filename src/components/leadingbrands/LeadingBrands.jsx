import cannaWholesalers from '../../assets/cannaWholesalers.png'
import './style.css'

function LeadingBrands() {
  return (
    <div>
      <div className="container brandContent">
        <div className="row">
          <div className="col brandText">trusted by leading cannabis brands</div>
          <div className="col">test</div>
          <div className="col"><img src={cannaWholesalers} alt="cannaWholesalers" className='cannaWholesalers' /></div>
          <div className="col">test</div>
        </div>
      </div>
    </div>
  )
}

export default LeadingBrands

