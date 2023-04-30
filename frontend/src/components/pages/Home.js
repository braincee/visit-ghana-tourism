import React from 'react'
import { Container, Col, Row } from 'reactstrap';
import '../../styles/home.css';
import heroImg from '../../assets/images/hero-img01.jpg';
import heroImg02 from '../../assets/images/hero-img02.jpg'
import heroVideo from '../../assets/images/hero-video.mp4';
import worldImg from '../../assets/images/world.png';
import Subtitle from '../shared/Subtitle';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../../services/ServiceList';
import FeaturedTourList from '../Featured-tours/FeaturedTourList';
import experienceImg from '../../assets/images/experience.png';
import MasonryImagesGallery from '../image-gallery/MasonryImagesGallery';
import Testimonial from '../Testimonial/Testimonial';
import NewsLetter from '../shared/NewsLetter';

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
        <Col lg="2">
        <div className="hero__img-box"><img src={heroImg} alt="/"/></div>
        </Col>
        <Col lg="2">
        <div className="hero__img-box mt-4"><video src={heroVideo} alt="/" controls/></div>
        </Col>
        <Col lg="2">
        <div className="hero__img-box mt-5"><img src={heroImg02} alt="/"/></div>
        </Col>
        <SearchBar />
      </Row>
     </Container>
     <section>
      <Container>
        <Row>
          <Col lg="3"> 
             <h5 className='services__subtitle'>What we serve</h5>
             <h2 className='services__title'>We offer our best services</h2>
          </Col>
          <ServiceList />
        </Row>
      </Container>
     </section>
     <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <Subtitle subtitle={"Explore"}/>
            <h2 className='featured__tour-title'>Our featured tours</h2>
          </Col>
          <FeaturedTourList />
        </Row>
      </Container>
     </section>
     <section>
      <Container>
        <Row>
          <Col lg="6">
             <div className="experience__content">
              <Subtitle subtitle={'Experience'}/>
              <h2>With our all experience <br /> we will serve you</h2>
              <p>
               Kwesi Appiah Korang
              <br />
              Obed Kweku Frempong Boadi
              </p>
             </div>
             <div className="counter__wrapper d-flex align-items-center gap-5">
               <div className="counter__box">
                  <span>12K+</span>
                  <h6>Succesful trip</h6>
               </div>
               <div className="counter__box">
                  <span>2K</span>
                  <h6>Regular clients</h6>
               </div>
               <div className="counter__box">
                  <span>15</span>
                  <h6>Years experience</h6>
               </div>
             </div>
          </Col>
          <Col lg='6'>
            <div className="experience__img">
              <img src={experienceImg} alt=""/>
            </div>
          </Col>
        </Row>
      </Container>
     </section>
     <section>
      <Container>
        <Row>
          <Col lg="12">
             <Subtitle subtitle={"Gallery"}/>
             <h2 className='gallery__title'>
              Visit our customers tour gallery
             </h2>
          </Col>
          <Col lg="12">
            <MasonryImagesGallery />
          </Col>
        </Row>
      </Container>
     </section>
     <section>
       <Container>
        <Row>
          <Col lg='12'>
             <Subtitle subtitle={'Fans Love'}/>
             <h2 className='testimoial__title'>What our fans say about us</h2>
          </Col>
          <Col>
           <Testimonial />
          </Col>
        </Row>
       </Container>
     </section>
     <NewsLetter />
    </>
  )
}

export default Home;