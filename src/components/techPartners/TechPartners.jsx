import './style.css'
import attentive from '../../assets/attentive.png'
import bigcommerce from '../../assets/bigcommerce.png'
import shopify from '../../assets/shopify.png'
import klaviyo from '../../assets/klaviyo.png'
import opensend from '../../assets/opensend.png'

function TechPartners() {
  return (
    <div className='techPartnersContainer'>
      <h1 className="techPartnersHeader">our tech partners</h1>
      <div className="techPartnersLogo">
        <img src={attentive} alt="attentive" className='techPartnersImg attentiveImg' />
        <img src={bigcommerce} alt="bigcommerce" className='techPartnersImg bigcommerceImg' />
        <img src={shopify} alt="shopify" className='techPartnersImg shopifyImg' />
        <img src={opensend} alt="opensend" className='techPartnersImg opensendImg' />
        <img src={klaviyo} alt="klaviyo" className='techPartnersImg klaviyoImg' />
      </div>
    </div>
  )
}

export default TechPartners
