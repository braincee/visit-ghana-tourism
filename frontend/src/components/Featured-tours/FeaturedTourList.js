import React from 'react'
import { Col } from 'reactstrap';
import TourData from '../../assets/data/tours'
import TourCard from '../shared/TourCard';

const FeaturedTourList = () => {
  return (
    <>
      {TourData.map((tour) => (
        <Col key={tour.id} lg="3" className='mb-4'><TourCard tour={tour}/></Col>
      ))}
    </>
  )
}

export default FeaturedTourList;