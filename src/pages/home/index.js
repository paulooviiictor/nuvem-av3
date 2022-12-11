import React from "react"
import Header from "../../components/Header";
import Carousel from 'react-bootstrap/Carousel';
import ReactBootstrapCarousel from "react-bootstrap-carousel";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import img1 from "../../img/img01.png";
import img2 from "../../img/img02.png";
import img3 from "../../img/img03.png";

class Home extends React.Component {
    render() {
        return (
            <>
                <Header />
                {/* <h1><center> VOCÊ ESTÁ NA PÁGINA DE APRESENTAÇÃO </center></h1> */}
                <Carousel>
                    <Carousel.Item>
                        <img src={img1} alt="TESTE" style={{ width: '80%'}}/>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src={img2} alt="TESTE" style={{ width: '80%' }}/>

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src={img3} alt="TESTE" style={{ width: '80%' }}/>

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </>
        )
    }
}

export default Home