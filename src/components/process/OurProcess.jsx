import './style.css'
import cloudProcess from '../../assets/cloudProcess.png'
import audit from '../../assets/process-audit.png'
import consultation from '../../assets/process-consultation.png'
import graph from '../../assets/process-graph.png'
import mail from '../../assets/process-mail.png'
import rocket from '../../assets/process-rocket.png'
import write from '../../assets/process-write.png'
import trace1 from '../../assets/process-trace1.png'
import trace2 from '../../assets/process-trace2.png'

const processes = [{
  num: 1,
  img: audit,
  title: "Email Marketing Audit",
  description: "Schedule a 15-minute discovery call to discuss your specific needs and provide you with a complimentary Email Marketing Audit."
},
{
  num: 2,
  img: consultation,
  title: "Consultation & Strategy Call",
  description: "We craft a customized strategy plan on how to best market your brand. Learn about our expertise, services offered, and how we can help scale your business."
},
{
  num: 3,
  img: rocket,
  title: "Onboarding & Kickoff Call",
  description: "Once you are ready to partner with us, we get you onboarded and get the party started. We get your sales and customer engagement high as a kite."
},
{
  num: 4,
  img: write,
  title: "Produce First Design",
  description: "Within the first few days, we deliver the initial email design drafts. You provide feedback, and we revise as needed."
},
{
  num: 5,
  img: mail,
  title: "Launch Campaigns & Flows",
  description: "We get your campaigns and automations live and generating revenue, engagement and customers."
},
{
  num: 6,
  img: graph,
  title: "Split test, Analyze, and Improve Performance",
  description: "We review performance data, make improvements, and constantly split-test to achieve better metrics over time."
}]

function OurProcess() {
  return (
    <div className="OurProcessContainer">
        <div className="ourProcessRectangle"></div>
        <div className="ourProcessRectangleBig"></div>
        <img src={cloudProcess} alt="" className='clourProcessImg' />
        <h1 className='ourProcessHeading'>our process</h1>
        <p className='ourProcessIntroduction'>Ready to grow your cannabis brand? Here&apos;s how we work together:</p>

        <div className="ourProcessCardsContainer">

        </div>
    </div>
  )
}

export default OurProcess
