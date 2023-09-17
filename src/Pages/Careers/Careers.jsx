import React from 'react'
import "./Careers.scss"
import JobCard from './JobCard/JobCard'
const Careers = () => {
  return (
      <div className='careers'>
          <div className="careersContainer">
              <div className="top">
                  <h3>Search For A Job</h3>
                  <span className='searchIBox'>
                  <input type="search" required placeholder='Search for Jobs by Title' className='searchInput'/>
                      <button className='btnSearch'>SEARCH</button>
                  </span>
              </div>
              <div className='bottom'>
                  <h3>List Of Available Jobs</h3>
                  <div className="jobsContainer">
                     
                      <JobCard />
                      <JobCard />
                      <JobCard />
                      <JobCard />
                      <JobCard />
                      <JobCard />
                      <JobCard />
                      <JobCard />
                      <JobCard />
                      <JobCard />
                  </div>
              </div>

              
          </div>
    </div>
  )
}

export default Careers