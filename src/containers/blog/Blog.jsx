import React from 'react'
import {Article} from "../../components"
import {blog1, blog2, blog3, blog4, blog5} from "../blog/imports"
import "./blog.css"


const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text"> Catch up on the latest news.
         </h1>
         <h1 className="gradient__text">Follow our blog</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgURL={blog1} date="November 2022" title="AI is the future. Open to see more"/>
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article imgURL={blog2} date="November 2022" title="AI is the future. Open to see more"/>
          <Article imgURL={blog3} date="November 2022" title="AI is the future. Open to see more"/>
          <Article imgURL={blog4} date="November 2022" title="AI is the future. Open to see more"/>
          <Article imgURL={blog5} date="November 2022" title="AI is the future. Open to see more"/>
        </div>
      </div>
    </div>
  )
}

export default Blog
