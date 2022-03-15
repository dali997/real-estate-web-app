import React from 'react'
import {Carousel} from 'react-bootstrap'
const Home = () => {
    return (
      <div>
        <h1 className='wel'>your dream house is here </h1>
        <br/>
            <div className='slides'>
            <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100 BR1"
      src="https://homegrowsc.com/wp-content/uploads/2021/08/real-estate-video-marketing-1920x1080-1-2.jpg"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 BR1"
      src="https://top10cairo.com/wp-content/uploads/2020/05/Top-Best-Real-Estate-Companies-Agencies-Brokers-Cairo-Egypt.jpg"
      alt="Second slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 BR1"
      src="https://blog.ipleaders.in/wp-content/uploads/2018/12/real_estate.jpg"
      alt="Third slide"
    />
  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 BR1"
      src="https://www.mes-allocs.fr/guides/wp-content/uploads/2020/02/agence-immobilieres-en-ligne.png"
      alt="FOURTH slide"
    />
  
  </Carousel.Item>
</Carousel>
<br/>
<br/>
      </div>
      <div className='about1'>
      <h2 className='about'>About Us :</h2>
      <p className='about2'>
Since its inception in 2011, The Agency has redefined the business of real estate, modernizing and advancing the industry by fostering a culture of partnership in which all clients and listings are represented in a collaborative environment by all of its agents. Shunning the traditional model of how real estate is practiced, our agents share their knowledge, spheres of influence, contacts and expertise, ensuring our clients better representation and a true competitive edge.



This approach has proven highly successful. Four years after its inception, The Agency was L.A.’s most outstanding real estate brokerage, with 13 of our agents ranked among the top 250 realtors in the United States, as measured by total sales volume by the Wall Street Journal and REAL Trends, Inc. To date, The Agency has closed more than $30 billion worth of real estate transactions and established itself as a preeminent player in the luxury real estate market, representing many of the country’s most visible and high-end properties.



The Agency extends far beyond what a conventional brokerage firm offers. It envisions itself as both a lifestyle company committed to informing and connecting global communities, and as a creative agency offering design, marketing and sales solutions for buyers, sellers, developers and investors across the globe.</p>
</div>
      </div>
    )
}

export default Home
