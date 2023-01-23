import React from 'react'
import Feature from '../../components/feature/Feature'
import './whatGPT3.css'

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id ="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is the Future of Technology?" text="The future of technology is promising and exciting. Advances in artificial intelligence, machine learning, and automation are transforming industries and making our lives easier. These technologies are expected to continue to improve and become more prevalent in the coming years.

One major area of technology that is likely to see significant growth in the future is the Internet of Things (IoT). This involves connecting everyday devices and appliances to the internet, allowing them to communicate with each other and with us. This will lead to the creation of smart homes, cities, and transportation systems that can improve efficiency and convenience.

Virtual and augmented reality are also expected to become more mainstream in the future. These technologies have the potential to revolutionize the way we interact with the world and with each other, making it possible to experience things in new and immersive ways.

The field of medicine is also expected to be transformed by technology. Advancements in genomics and precision medicine are allowing for more personalized treatments and cures. "/>
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="AI" text="Artificial intelligence (AI) is a rapidly developing field of technology that involves the creation of machines and computer systems that can perform tasks that would normally require human intelligence. This includes tasks such as recognizing speech, understanding natural language, and learning from data. AI has the potential to revolutionize many industries, from healthcare and transportation to finance and manufacturing. "/>
      <Feature title="Databases" text="Databases play a crucial role in the development and implementation of AI systems. They store and organize the large amounts of data that AI algorithms require in order to learn and make predictions."/>
      <Feature title="Data Training" text="Data training is a crucial step in the development of AI systems. It involves feeding large amounts of data into an AI algorithm, allowing it to learn and make predictions based on that data. The quality and diversity of the data used for training greatly impacts the performance and accuracy of the AI system."/>
    </div>
    </div>
  )
}

export default WhatGPT3
