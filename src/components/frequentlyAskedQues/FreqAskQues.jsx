import './style.css'

const faqs = [
    {
      question: "What do your service plans include?",
      answer: [
        "A dedicated team including an Email Marketing Specialist, Copywriter, Designer, Email Marketing Technician, and Account Manager.",
        "Customer-centered marketing strategy with Customer Lifecycle Flows and Advanced Flows.",
        "Regular account audits and ongoing adjustments.",
        "Advanced segmentation and targeting.",
        "Optimized ROI and engagement.",
        "Customizable email and SMS communication from your Email Marketing Specialist.",
        "Comprehensive monthly campaign review.",
        "Monthly reports that are in-depth with common KPIs we track and prioritize for your account."
      ],
      isBulletList: true
    },
    {
      question: "Which ESPs & eCommerce platforms do you work with?",
      answer: "We specialize in Klaviyo, one of the only platforms that allows Cannabis-related marketing. We work with Shopify, Shopify Plus, Magento, WooCommerce, and other eCommerce stores. Our expertise ensures compliance with cannabis industry regulations across all platforms.",
      isBulletList: false
    },
    {
      question: "How many emails come with my plan?",
      answer: "We have several plan options based on the number of emails you would like us to create for your strategy each month. Depending on your company & marketing objectives, your Account Executive will help you select the plan that best fits your needs.",
      isBulletList: false
    },
    {
      question: "What does onboarding look like?",
      answer: "The first thing we do is have you fill out a simple onboarding document. Then, we launch your project with a kick-off call where you meet your Email Marketing Specialist.",
      isBulletList: false
    },
    {
      question: "Is there a minimum commitment required for your services?",
      answer: "Absolutely not. We don&apos;t believe in tying anyone down. If you stay, it&apos;s because of the excellent service we provide, not a binding contract.",
      isBulletList: false
    }
  ];
  

function FreqAskQues() {
  return (
    <div className='freqAskQuesContainer'>
      <h1 className='freqAskQuesHeading'>frequently asked questions</h1>

      <div className="freqAskQuesCard">
        {faqs.map((faq, index) =>
            <div className="freqAskQuesContent" key={index}>
                <h3 className="freqAskQuesQuestion">{faq.question}</h3>
                {faq.isBulletList ? (
                    <ul className="faqBulletAsnwer">
                        {faq.answer.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="faqAnswer">{faq.answer}</p>
                )}
            </div>
        )}
      </div>
    </div>
  )
}

export default FreqAskQues
