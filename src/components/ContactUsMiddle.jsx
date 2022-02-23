import { Button, Col, Container, Form, Row } from "react-bootstrap";
import HolidayPackagesMiddleCSS from "./HolidayPackagesMiddle.module.css";
import "./ContactUsMiddle.css";
import LocationComp from "./LocationComp";

function ContactUsMiddle() {
	return (
		<div>
			<Container
				fluid
				className={
					HolidayPackagesMiddleCSS.holidayPackagesMiddleBackGroundImage
				}
			>
				<center>
					<Row className="mt-5">
						<Col>
							<div className="first-row pl-0">
								<ul className="py-1 text-left">
									<li>Address</li>
									<li>Telephone</li>
									<li>E-mail</li>
								</ul>
							</div>
						</Col>
						<Col>
							<LocationComp width="18vw" height="18vw" />
						</Col>
					</Row>
					<Row>
						<Col className="p-0">
							<div
								style={{
									backgroundColor: "#61FFFF66",
									width: "100vw",
									marginLeft: "0px",
								}}
							>
								<h2>Get in Touch</h2>
							</div>
						</Col>
					</Row>

					<Row
						style={{
							backgroundColor: "rgb(245, 247, 246,0.5)",
							margin: "0.7em",
							borderRadius: "20px",
							padding: "2em",
							border: "solid white 4px",
							maxWidth: "1200px",
							display: "flex",
							justifyContent: "center",
						}}
					>
						<Col className="col-md-5">
							<Form>
								<Form.Group className="mb-4">
									<Form.Label className="d-flex">
										Name
									</Form.Label>
									<Form.Control
										type="text"
										placeholder="Name"
										style={{
											borderRadius: "1em",
											backgroundColor:
												"rgb(245, 247, 246,0.7)",
										}}
									/>
								</Form.Group>
								<Form.Group className="mb-4">
									<Form.Label className="d-flex">
										Contact Number
									</Form.Label>
									<Form.Control
										type="Telephone"
										placeholder="Contact Number"
										style={{
											borderRadius: "1em",
											backgroundColor:
												"rgb(245, 247, 246,0.7)",
										}}
									/>
								</Form.Group>
								<Form.Group className="mb-4">
									<Form.Label className="d-flex">
										Email
									</Form.Label>
									<Form.Control
										type="Email"
										placeholder="Email"
										style={{
											borderRadius: "1em",
											backgroundColor:
												"rgb(245, 247, 246,0.7)",
										}}
									/>
								</Form.Group>
								<Form.Group className="mb-4">
									<Form.Label className="d-flex">
										Country
									</Form.Label>
									<Form.Control
										type="text"
										placeholder="Country"
										style={{
											borderRadius: "1em",
											backgroundColor:
												"rgb(245, 247, 246,0.7)",
										}}
									/>
								</Form.Group>
								<Form.Group className="mb-4">
									<Form.Label className="d-flex">
										Arrival Date
									</Form.Label>
									<Form.Control
										type="Date"
										placeholder="ArrivalDate"
										style={{
											borderRadius: "1em",
											backgroundColor:
												"rgb(245, 247, 246,0.7)",
										}}
									/>
								</Form.Group>
								<Form.Group className="mb-4">
									<Form.Label className="d-flex">
										Departure Date
									</Form.Label>
									<Form.Control
										type="Date"
										placeholder="DepartureDate"
										style={{
											borderRadius: "1em",
											backgroundColor:
												"rgb(245, 247, 246,0.7)",
										}}
									/>
								</Form.Group>
								<Form.Group className="mb-4">
									<Form.Label className="d-flex">
										People Count
									</Form.Label>
									<Form.Control
										type="Number"
										placeholder="PeopleCount"
										style={{
											borderRadius: "1em",
											backgroundColor:
												"rgb(245, 247, 246,0.7)",
										}}
									/>
								</Form.Group>
							</Form>
						</Col>
						<Col className="col-md-5 ">
							<Form.Group className="mb-4">
								<Form.Label className="d-flex">
									Messege
								</Form.Label>
								<Form.Control
									type="text"
									placeholder="Messege"
									as="textarea"
									rows={5}
									style={{
										borderRadius: "1em",
										backgroundColor:
											"rgb(245, 247, 246,0.7)",
									}}
								/>
							</Form.Group>
							<Button variant="success" className="m-4 btn-lg">
								Submit
							</Button>
						</Col>
					</Row>
				</center>
			</Container>
		</div>
	);
}

export default ContactUsMiddle;
