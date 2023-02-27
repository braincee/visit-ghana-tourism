import React from 'react'
import './newsletter.css'
import { Container, Row, Col } from 'reactstrap'
import MaleTourist from '../../assets/images/male-tourist.png'

const NewsLetter = () => {
  return (
    <section className="newsletter">
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="newsletter__content">
                        <h2>Subscribe now to get useful traveling information</h2>
                    </div>
                    <div className="newsletter__input">
                        <input type="email" placeholder='Enter your email'/>
                        <div className="btn newsletter__btn">Subscribe</div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing 
                        elit. Ducimus quidem sapiente delectus cumque quo dolore.</p>
                </Col>
                <Col lg='6'>
                    <div className="newletter__img">
                        <img src={MaleTourist} alt=""/>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default NewsLetter