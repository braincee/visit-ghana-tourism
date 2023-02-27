import React from 'react'
import { Container, Col, Row } from 'reactstrap';
import '../../styles/home.css';
import heroImg from '../../assets/images/hero-img01.jpg';
import heroImg02 from '../../assets/images/hero-img02.jpg'
import heroVideo from '../../assets/images/hero-video.mp4';
import worldImg from '../../assets/images/world.png';
import Subtitle from '../shared/Subtitle';

const Home = () => {
  return (
    <>
     <Container>
      <Row>
        <Col lg='6'>
           <div className="hero__content">
             <div className="hero__subtitle d-flex align-items-center">
              <Subtitle subtitle={'Know before you Go'}/>
               <img src={worldImg} alt=""/>
             </div>
             <h1>Traveling opens doors to creating <span className='highlight'>memories</span></h1>
             <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
             Nulla accumsan condimentum erat. Mauris maximus id ipsum et 
             fringilla. Aenean blandit ante quis neque varius congue. Nullam gravida varius pulvinar. 
             Vestibulum molestie scelerisque enim vel porttitor. Cras nec dolor
             </p>
           </div>
        </Col>
      </Row>
     </Container>
    </>
  )
}

export default Home;