import './style.css';
import plant from '../../assets/plant.png'

function Cannabis() {
  return (
    <div>
      <div className="cannabisContent">
        <h2>email & sms experts for</h2>
        <h1>cannabis brands</h1>
        <p>We specialize in crafting compliant, results-driven email and SMS campaigns specifically for cannabis brands. We help you overcome social media restrictions, banned substance regulations, and email provider limitations. Boost your brand&apos;s revenue, engage your customers, and turn your email subscribers into loyal customers.</p>
      </div>
      <div className="cannabisBtn">
        <button className='cannabisBtnInRev'>increase my revenue</button>
        <button className='cannabisBtnHoWo'>how it works</button>
      </div>
      <div className="waterBGContainer">
        <img src={plant} alt="plant" className='plant' />
        <div className="gradientBox"></div>
      </div>
    </div>
  )
}

export default Cannabis
