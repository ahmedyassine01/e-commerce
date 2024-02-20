import React from 'react';
import { Carousel } from 'react-bootstrap';
import './home.css'; // Import your custom CSS file

const Home = () => {
  return (
    <Carousel className="carousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://alldaychic.com/wp-content/uploads/2021/08/fashion-choice.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>mens</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/R.314a9d3f671763630133ed9db0e25d46?rik=7QaCNEIJT3j8uw&riu=http%3a%2f%2fwomenpla.net%2fwp-content%2fuploads%2f2013%2f07%2fwomen_shopping_trends.jpg&ehk=LvNnObLU7UKqMOJbaHBvZ4RKS5Yi%2fxpaxWfWS88CEYg%3d&risl=&pid=ImgRaw&r=0"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>womens</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/premium-photo/cute-little-girl-shopping-portrait-kid-with-shopping-bags-shopping-girl_109285-1413.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>kids</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Home;
