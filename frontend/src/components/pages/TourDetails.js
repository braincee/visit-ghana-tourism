import React from 'react'
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import tourData from '../../assets/data/tours'
import calculateAvgRating from '../../utils/avgRating';

const TourDetails = () => {

  const {id} = useParams()

  const tour = tourData.find(tour => tour.id === id)

  const { photo, title, desc, price, reviews, city, distance, maxGroupSize, address } = tour
  const { totalRating, avgRating } = calculateAvgRating(reviews)

  return (
    <>
    <section>
      <Container>
        <Row>
          <Col lg='8'>
            <div className='tour__content'>
              <img src={photo} alt=""/>
              <div className="tour__info">
                <h2>{title}</h2>
                <div className="d-flex align-items-center gap-5">
                <span className='tour__rating d-flex align-items-center gap-1'>
                  <i class="ri-star-fill" style={{color: 'var(--secondary-color)'}}></i>
                   {calculateAvgRating === 0 ? null : avgRating} 
                   {totalRating === 0 ? ('Not rated' ) : ( <span>({reviews.length})</span> )}
                 </span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default TourDetails;