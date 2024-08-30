import './style.css'
import jeeterProduct from '../../assets/jeeterCannabisProduct.png'
import destinoProducts from '../../assets/destinoFarmsProducts.png'
import cannaWholesaleProduct from '../../assets/cannaWholesalerProduct.png'
// import scratchMultiColor from '../../assets/scratchMultiColor.png'

const storiesProducts = [{
  image: jeeterProduct,
  brand: "Jeeter Cannabis",
},
{
  image: destinoProducts,
  brand: "Destino Farms",
},
{
  image: cannaWholesaleProduct,
  brand: "CannaWholesalers",
}]

function Stories() {
  return (
    <div className='storiesContainer'>
      {/* <img src={scratchMultiColor} alt="" className='scratchMultiColor'/> */}
      <div className="headerStoriesContainer">
        <h1>our success stories</h1>
        <h3>will you be next?</h3>
      </div>

      <div className="storiesCardContainer">
        {storiesProducts.map((product) =>
          <div className="storiesCard" key={product.brand}>
            <img src={product.image} alt="productImage" className='storiesCardImg' />
            <h3 className='storiesCardBrandName'>{product.brand}</h3>
            <button className='storiesCardButton'>explore</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Stories
