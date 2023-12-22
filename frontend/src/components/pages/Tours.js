import React, { useState, useEffect }from 'react'
import CommonSection from '../shared/CommonSection';
import tourData from '../../assets/data/tours'
import TourCard from '../shared/TourCard';
import NewsLetter from '../shared/NewsLetter';
import SearchBar from '../shared/SearchBar';
import { Container, Row, Col } from 'reactstrap';
import '../../styles/tour.css';

const Tours = () => {

  const [ pageCount, setPageCount ] = useState(0)
  const [ page, setPage ] = useState(0)

  useEffect(() => {
    const page = Math.ceil(5/4)
    setPageCount(page)
  }, [page])

  return (
    <>
     <CommonSection title={"All Tours"}/>
     <section>
      <Container>
        <Row>
          <SearchBar />
        </Row>
      </Container>
     </section>
     <section className='pt-0'>
      <Container>
        <Row>
          {tourData.map(tour => <Col key={tour.id} lg='3' className='mb-4'><TourCard tour={tour}/></Col>)}
          <Col lg='12'>
            <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
              {[...Array(pageCount).keys()].map(number =>(
                <span key={number}
                 onClick={() => setPage(number)}
                 className={page === number ? 'active__page' : ""}>
                { number + 1 }</span>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
     </section>
     <NewsLetter />
    </>
  )
}

export default Tours;