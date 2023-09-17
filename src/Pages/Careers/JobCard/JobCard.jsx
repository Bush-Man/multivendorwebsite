import React from 'react'
import "./JobCard.scss";
const JobCard = () => {
  return (
      <div className='jobCard'>
          <div className="jobCardTop">
              
              <h1 className='jobTitle'>
                  Sr. Analyst - Speed differentiation, Delivery Speed and Long-term Planning
              </h1>
                  <div className='datePosted'>
                      <span>Posted August 4, 2023</span> 
                      <span>(Updated 5 minutes ago)</span>
                  </div>
          </div>
            <div  className='jobCardCenter'>
                  <span>Location: KENYA</span>
                  <span>JobId: 635515</span>
          </div>
          <div className="jobCardBottom">
              <h4>Basic Qualifications</h4>
              <ul>
                  <li>
                      Degree in Statistics, Data science or Ecomonics, with several years of experience in an analytical field
                  </li>
                  <li>
                      Degree in Statistics, Data science or Ecomonics, with several years of experience in an analytical field
                  </li>
                  <li>
                      Degree in Statistics, Data science or Ecomonics, with several years of experience in an analytical field
                  </li>
                  <li>
                      Degree in Statistics, Data science or Ecomonics, with several years of experience in an analytical field
                  </li>
              </ul>
          </div>
          <span className='readMore'>...Read More</span>
      </div>
  )
}

export default JobCard