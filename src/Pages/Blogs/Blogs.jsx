import React from 'react'
import Blog from './Blog/Blog'
import './Blogs.scss';
import { Hero } from '../../AllExports';
const Blogs = () => {
  return (
      <div className='blogs'>
          <Hero />
          <h3>Blogs.</h3>
          <div className="containers">  
              <Blog />
              <Blog />
              <Blog />
              <Blog />
              <Blog />
              <Blog />
              <Blog />
              <Blog />
              <Blog />
              <Blog />
              <Blog />
              <Blog />
              <Blog />
              <Blog />
              <Blog />
              <Blog />
              <Blog />
          </div>
    </div>
  )
}

export default Blogs