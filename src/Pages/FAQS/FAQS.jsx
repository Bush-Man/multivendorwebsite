
import Faq from './Faq/Faq.jsx';
import { FAQSDATA } from '../../Data/FAQS.JS';
import "./FAQS.scss";

const FAQS = () => {

  return (
      <div className='faqs'>
          <h3>Frequently Asked Questions</h3>
          <div className="container" >
              {
                  FAQSDATA.map(item => 
                  
                  <Faq item={item} key={item.id} />
                  )
                }
                </div>
          
    </div>
  )
}

export default FAQS