import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ALocationSlider from './ALocationSlider';
import LocationComp from './LocationComp';
import WhereToGoUpperMiddleCSS from './WhereToGoUpperMiddle.module.css';

function WhereToGoUpperMiddle() {
  return (
    <Container
      fluid
      className={`bg-blend-multiply p-0 ${WhereToGoUpperMiddleCSS.whereToGoBackGroundImage}`}
    >
      <Row fluid className="m-0">
        <ALocationSlider />
      </Row>
      <Row className="p-5 m-5 text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
        tenetur velit id beatae? Minus perspiciatis, veritatis repudiandae
        voluptatem odio ipsum nesciunt, consequuntur iure autem animi
        dignissimos, exercitationem ullam quisquam placeat cupiditate veniam
        enim in provident officiis repellat sit recusandae. Voluptatem esse
        facere dicta exercitationem. Consectetur sit necessitatibus earum,
        nesciunt laborum repudiandae in. Repellat, odit distinctio. Ducimus
        consequatur suscipit asperiores! Explicabo accusamus alias perspiciatis
        facilis, placeat eius, quibusdam iste, fugiat sit odio eaque ducimus
        voluptatum quidem illo ex exercitationem porro facere nemo vero est
        debitis quos eum! Unde eveniet aspernatur blanditiis autem a cumque
        laboriosam est voluptatum nam reprehenderit tempore obcaecati, sunt
        dolorem adipisci modi dignissimos. Id, quos officiis, mollitia at
        asperiores fugiat pariatur reiciendis ab rerum nemo eligendi repudiandae
        eos nihil. Fugit laborum incidunt optio! Explicabo reprehenderit alias,
        facilis est necessitatibus nihil aperiam nisi quo ipsam, voluptates,
        iure dignissimos totam non consectetur dicta velit. Eaque et, delectus
        eligendi explicabo ratione quasi enim placeat beatae minima quo debitis
        voluptatem magni recusandae error aliquam cumque alias iste dolor
        impedit? Facere provident dolorem ad necessitatibus maxime possimus
        blanditiis! Harum dolore accusantium ea, voluptates facere provident
        facilis necessitatibus saepe vel alias, voluptate ex debitis tempore
        voluptatem quas, doloribus exercitationem aliquid maiores! Voluptatum,
        nisi veniam?
      </Row>
      <Row className="justify-content-around">
        <Col
          className="d-flex m-5 justify-content-around p-auto m-auto"
          lg={4}
          md={3}
        >
          <LocationComp width="25vw" height="25vw" />
        </Col>
        <Row
          className="d-flex m-5 justify-content-around p-auto m-auto border rounded-top rounded-bottom p-3"
          style={{ width: '15vw', height: '15vw' }}
        >
          <Container className="text-left my-3 text-white">
            For any question
          </Container>
          <Container className="text-left text-white">Email</Container>
          <Container className="text-left text-white">Telephone</Container>
          <Container className="text-left text-white">Whatsapp</Container>
        </Row>
      </Row>
    </Container>
  );
}

export default WhereToGoUpperMiddle;
