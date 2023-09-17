/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, memo } from 'react'
import "./ProgressBar.scss";
const ProgressBar = memo(({ current_stock, total_stock }) => {
    let percentage; 
    let color;
    
    
    if (total_stock > current_stock) {
    
        percentage = (current_stock / total_stock) * 100;
        if (percentage >= 50) {
                color = "green";
        } else if (percentage <=  49) {
                color = "red";
        } else {
            color = "green"
            }

        } else {
            percentage = 0;
            color="red"
    }
    
   
   

  return (
      <div className='progress_bar' style={{width:"100%"}}>
          <div className="progress_bar_groove" style={{width:`${percentage}%`,backgroundColor:color}} >
          </div>
    </div>
  )
}
)
ProgressBar.displayName = 'ProgressBar';

export default ProgressBar;
