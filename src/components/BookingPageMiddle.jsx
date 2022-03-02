import React from 'react';
import { Container, Row, Button, Form, Col } from 'react-bootstrap';
import APackageMiddleCSS from './APackageMiddle.module.css';
import BookNowComp from './BookNowComp';
import ForAnyQComp from './ForAnyQComp';
import './ContactUsMiddle.css';
import Booking from '../pages/Booking';
import Bookingdetails from './BookingDetailsComp';

function BookongPageMiddle({ location }) {
  return (
    <Container
      fluid
      className={`bg-blend-multiply px-0 py-4 ${APackageMiddleCSS.aPackageMiddleBackGroundImage}`}
    >
      <Container>
        <Row>
          <Col
            className="md-6 m-3 p-4"
            style={{
              backgroundColor: 'rgb(245, 247, 246,0.4)',
              borderRadius: '20px',
              border: 'solid white 2px',
            }}
          >
            <Form
              onSubmit={() => {
                console.log(location);
              }}
              action="mailto:sudasinghegeshan@gmail.com?subject=Booking"
              method="POST"
              encType="text/plain"
            >
              <Form.Group>
                <Form.Label>Arrival Date</Form.Label>
                <Form.Control
                  type="Date"
                  placeholder="Arrival Date"
                  name="Arrival Date"
                  id="arrival date"
                  style={{
                    borderRadius: '1em',
                    backgroundColor: 'rgb(245, 247, 246,0.7)',
                  }}
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  name="Name"
                  id="name"
                  style={{
                    borderRadius: '1em',
                    backgroundColor: 'rgb(245, 247, 246,0.7)',
                  }}
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Contact Number</Form.Label>
                <Form.Control
                  type="Telephone"
                  placeholder="Contact Number"
                  name="Contact Number"
                  id="contactNumber"
                  style={{
                    borderRadius: '1em',
                    backgroundColor: 'rgb(245, 247, 246,0.7)',
                  }}
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="Email"
                  placeholder="Email"
                  name="Email"
                  id="email"
                  style={{
                    borderRadius: '1em',
                    backgroundColor: 'rgb(245, 247, 246,0.7)',
                  }}
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>No. of Packs</Form.Label>
                <Form.Control
                  type="Number"
                  placeholder="No. of Packs"
                  name="No. of Packs"
                  id="noOfPacks"
                  style={{
                    borderRadius: '1em',
                    backgroundColor: 'rgb(245, 247, 246,0.7)',
                  }}
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Messege</Form.Label>
                <Form.Control
                  type="text"
                  rows={4}
                  placeholder="Messsege"
                  name="Messege"
                  id="messege"
                  as="textarea"
                  style={{
                    borderRadius: '1em',
                    backgroundColor: 'rgb(245, 247, 246,0.7)',
                  }}
                ></Form.Control>
              </Form.Group>
              <Button
                variant="success"
                className="m-4 btn-lg"
                type="submit"
                value="Send"
              >
                Enquir Now
              </Button>
            </Form>
          </Col>
          <Col className="md-6 ">
            <Bookingdetails location={location} />
            <ForAnyQComp location={location} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default BookongPageMiddle;