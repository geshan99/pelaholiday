import { Nav, Navbar } from "react-bootstrap";

function NavBar() {
	return (
		<div
			style={{
				position: "absolute",
				width: "100%",
			}}
		>
			<>
				<Navbar bg="none" expand="lg">
					<Navbar.Brand href="/">Pela Holiday</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse
						id="basic-navbar-nav"
						className="justify-content-end "
					>
						<Nav className="me-auto">
							<Nav.Link href="/">Home</Nav.Link>
							<Nav.Link href="/wheretogo">Where to go</Nav.Link>
							<Nav.Link href="/wheretogo">What to do</Nav.Link>
							<Nav.Link href="/pakages">Holiday pakges</Nav.Link>
							<Nav.Link href="/pakages">
								Plan your holiday
							</Nav.Link>
							<Nav.Link href="/about">About us</Nav.Link>
							<Nav.Link href="/contact">Contact us</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</>
		</div>
	);
}

export default NavBar;
