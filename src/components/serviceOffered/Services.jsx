import "./style.css"
import shield from "../../assets/shield.png"
import scale from "../../assets/scale.png"
import arrow from "../../assets/arrow.png"
import graph from "../../assets/graph.png"
import scratchWhite from '../../assets/scratchWhite.png'

const cardContents = [{
    image: shield,
    text: "market & regulations compliant"
},
{
    image: scale,
    text: "attorney reviewd content"
},
{
    image: arrow,
    text: "guaranteed email deliverability"
},
{
    image: graph,
    text: "increase customers & revenue"
}]

function Services() {
  return (
    <>
    <div className="servicesMainContainer">
      {cardContents.map((content) => 
        <div className="card servicesCard" style={{width: "386px", height: "287px", borderRadius: "20px"}} key={content.text}>
            <div className="card-body servicesContent">
                <img src={content.image} alt="content img" className="servicesImage" />
                <h5 className="card-text servicesText">{content.text}</h5>
            </div>
        </div>
        )}
    </div>
    <img src={scratchWhite} alt="" className='scratchWhite'/>
    </>
  )
}

export default Services
