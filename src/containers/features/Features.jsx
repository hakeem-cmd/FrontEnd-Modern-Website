import React from 'react'
import './features.css'
import { Feature } from '../../components'

const featuresData = [
{
  title:"Technological reliability",
  text:"Technological reliability ensures the dependability and consistency of technology, making it a crucial aspect in today's world where technology is an integral part of our lives."
},
{
  title:"Seamless Browsing",
  text:"Seamless browsing refers to a smooth and uninterrupted user experience on the internet where the user can navigate through different websites and pages with ease and efficiency."
},
{
  title:"Technological Advancement",
  text:"Tech advancement is the continuous improvement and development of technology, bringing about new and innovative solutions for various industries and aspects of life."
}]



const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features" >
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">"Technology is a useful servant but a dangerous master" - Christian Lous Lange</h1>
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title}/>
        ))}
      </div>
    </div>
  )
}

export default Features
