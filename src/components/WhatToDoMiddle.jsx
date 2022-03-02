import React from "react";
import { Container } from "react-bootstrap";
import HolidayPackagesMiddleCSS from "./HolidayPackagesMiddle.module.css";
import TileComponentLayer from "./TileComponentLayer";

function WhatToDpMiddle() {
	return (
		<Container
			fluid
			className={
				HolidayPackagesMiddleCSS.holidayPackagesMiddleBackGroundImage
			}
		>
			<br></br>
			<TileComponentLayer type="type3" />
		</Container>
	);
}

export default WhatToDpMiddle;
