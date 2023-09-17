
import "./Faq.scss";
import { useState } from "react";
const Faq = ({ item }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(prev => !prev);
  }
  return (
      <div className="faq">
          <div className="top" onClick={handleClick}>
              <h3 className="question">
              {item.question}
              </h3>
              <button className="btnShow">V</button>
      </div>
      {
        show?<p className="answer" >
              {item.answer}
          </p>:""
      }
          
    </div>
  )
}

export default Faq