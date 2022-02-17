import React from "react";
import Header from "../components/Header";

function Home() {
	return (
		<div>
			<Header />
			<div
				className="introduction flex-with-center"
				style={{
					backgroundImage: `url('./introbg.svg')`,
				}}>
				<div className="">
					<h1>PONGSATHORN</h1>
					<div className="intro-content d-flex justify-content-between ">
						<p className="container-fluid text-center">
							Full Stack Developer, <br /> Passionate Learner
						</p>
						<button className="primary-button font-bold w-100">
							Get Started
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
