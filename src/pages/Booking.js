import Footer from "../components/Footer";
import WhereToGoUpper from "../components/WhereToGoUpper";
import surfboard from "../assets/A Page/surfboardScene.jpg";
import BookongPageMiddle from "../components/BookingPageMiddle";

function Booking() {
	return (
		<div>
			<WhereToGoUpper backPhoto={surfboard} title={"Polhena"} />
			<BookongPageMiddle location={"Polhena"} />
			<Footer />
		</div>
	);
}

export default Booking;
