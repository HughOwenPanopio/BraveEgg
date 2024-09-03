import './style.css'
import cloud from '../../assets/cloud.png'
import chess from '../../assets/chess.png'
import copywriting from '../../assets/copywriting.png'
import layout from '../../assets/layout.png'
import laptopMails from '../../assets/laptopMails.png'
import ellipse from '../../assets/Ellipse.png'
import dart from '../../assets/dart.png'
import checklist from '../../assets/checklist.png'
import writing from '../../assets/writing.png'
import mail from '../../assets/mail.png'

const consultations = [{
  image: chess,
  header: 'Brand Strategy',
  description: 'Our team understands the cannabis industry&apos;s unique regulations and challenges. We create tailored strategies to increase your brand&apos;s presence and revenue, while ensuring full compliance.',
  ellipse: ellipse,
  snippet: dart
},
{
  image: copywriting,
  header: 'Copywriting',
  description: 'We craft engaging, compliant copy that resonates with your audience and adheres to industry regulations. Overcome the limitations of social media and paid ads with our expert copy.',
  ellipse: ellipse,
  snippet: checklist
},
{
  image: layout,
  header: 'Email Design',
  description: 'Our designs stand out and drive engagement, focusing on creativity and compliance. Navigate email provider restrictions with our expertly crafted emails.',
  ellipse: ellipse,
  snippet: writing
},
{
  image: laptopMails,
  header: 'Klaviyo Management',
  description: 'Leave the heavy lifting to us! We manage your Klaviyo account, ensuring optimal performance and compliance with cannabis industry regulations.',
  ellipse: ellipse,
  snippet: mail
}]

function Consultation() {
  return (
    <div className='consultationContainer'>
        <div className="consultationHeaderContent">
            <div className="rectangle"></div>
            <img src={cloud} alt="clour" className='cloudImg'/>
            <h1 className='consultationHeading'>full stack email & sms</h1>
            <p className='consultationDescription'>We create yiur strategy, craft compelling copy, design engaging emails, and constantly measure, analyze, test, and optimize your campaigns to keep your brand ahead of the competition.</p>
        </div>
    </div>
  )
}

export default Consultation
