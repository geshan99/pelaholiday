import { Carousel, Image } from "react-bootstrap";
import ninearch from "../assets/ninearch.jpg";

function ImageSlider() {
	return (
		<div>
			<Carousel controls={true} nextLabel={""} prevLabel={""}>
				<Carousel.Item>
					<Image src={ninearch} className="w-100  "></Image>
					<Carousel.Caption>
						<h5 className="carousel-topic">Nine Arch</h5>
						<p className="carousel-des">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Tincidunt eget nullam non nisi
							est.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<Image src={ninearch} className="w-100 "></Image>
					<Carousel.Caption>
						<h5 className="carousel-topic">Sigiriya</h5>
						<p className="carousel-des">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Tincidunt eget nullam non nisi
							est.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default ImageSlider;
