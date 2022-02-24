import React from "react";
import {
	FaBootstrap,
	FaCss3Alt,
	FaHtml5,
	FaJsSquare,
	FaNodeJs,
	FaReact,
	FaGithub,
} from "react-icons/fa";
import { SiSequelize, SiMysql, SiMongodb } from "react-icons/si";
function Carousel() {
	return (
		<div>
			<div className="carousel-parent position-relative">
				<h1 className="position-absolute top-0 start-0 end-0 text-center mt-5">
					Technologies that I use
				</h1>
				<div className="gallery">
					<span style={{ "--i": 1 }}>
						<FaReact color="cyan" />
					</span>
					<span style={{ "--i": 2 }}>
						<FaJsSquare color="yellow" />
					</span>
					<span style={{ "--i": 3 }}>
						<FaHtml5 color="orange" />
					</span>
					<span style={{ "--i": 4 }}>
						<FaCss3Alt color="lightblue" />
					</span>
					<span style={{ "--i": 5 }}>
						<FaBootstrap color="purple" />
					</span>
					<span style={{ "--i": 6 }}>
						<FaNodeJs color="lime" />
					</span>
					<span style={{ "--i": 7 }}>
						<SiSequelize color="skyblue" />
					</span>
					<span style={{ "--i": 8 }}>
						<SiMysql color="royalblue" />
					</span>
					<span style={{ "--i": 9 }}>
						<SiMongodb color="olive" />
					</span>
					<span style={{ "--i": 10 }}>
						<FaGithub color="orangered" />
					</span>
				</div>
			</div>
		</div>
	);
}

export default Carousel;
