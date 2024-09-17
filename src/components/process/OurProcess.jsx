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
import { useState } from 'react'
import { useEffect } from 'react'

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
  num: 6,
  img: graph,
  title: "Split test, Analyze, and Improve Performance",
  description: "We review performance data, make improvements, and constantly split-test to achieve better metrics over time."
},
{
  num: 5,
  img: mail,
  title: "Launch Campaigns & Flows",
  description: "We get your campaigns and automations live and generating revenue, engagement and customers."
},
{
  num: 4,
  img: write,
  title: "Produce First Design",
  description: "Within the first few days, we deliver the initial email design drafts. You provide feedback, and we revise as needed."
}]

function OurProcess() {

  const [sortedProcesses, setSortedProcess] = useState(processes)

  const handleSort = () => {
    const viewportWidth = window.innerWidth

    if (viewportWidth >= 320 && viewportWidth <= 768){
      const sorted = [...processes].sort((a, b) => a.num - b.num)
      setSortedProcess(sorted)
    } else {
      setSortedProcess(processes)
    }
  }

  useEffect(() => {
    handleSort()
    window.addEventListener('resize', handleSort)

    return () => {
      window.removeEventListener('resize', handleSort)
    }
  }, [])

  return (
    <div className="OurProcessContainer">
        <div className="ourProcessRectangle"></div>
        <div className="ourProcessRectangleBig"></div>
        <img src={cloudProcess} alt="" className='clourProcessImg' />
        <h1 className='ourProcessHeading'>our process</h1>
        <p className='ourProcessIntroduction'>Ready to grow your cannabis brand? Here&apos;s how we work together:</p>

        <div className="ourProcessCardsContainer">
          {sortedProcesses.map((process) =>
          
            <div className="ourProcessCardContent" key={process.num}>
              <div className="ourProcessCardNum"><p className='processNum'>{process.num}</p></div>
              <img src={process.img} alt="processImg" className='ourProcessCardImg'/>
              <h3 className='ourProcessCardTitle'>{process.title}</h3>
              <p className="ourProcessCardDescription">{process.description}</p>
            </div>
          
          )}
          <img src={trace1} alt="" className='processtrace1'/>
          <img src={trace2} alt="" className='processtrace2'/>
        </div>
        <button className='ourProcessBTN'>get started now</button>
        <div className="ourProcessRectangleBigBottom"></div>
        <img src={cloudProcess} alt="" className='clourProcessImgBottom' />
    </div>
  )
}

export default OurProcess
