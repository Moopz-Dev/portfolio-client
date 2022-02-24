import React from "react";
import Carousel from "../components/Carousel";
import Header from "../components/Header";
import developerImage from "../public/web-design.jpg";
import doodle from "../public/doodle.png";

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
					<div
						data-aos="fade-right"
						className="intro-content d-flex justify-content-between ">
						<p className="container-fluid text-center">
							Full Stack Developer, <br /> Passionate Learner
						</p>
						<button className="primary-button font-bold w-100">
							Get Started
						</button>
					</div>
				</div>
			</div>
			<Carousel data-aos="fade-down" />
			<div className="">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path
						fill="#000"
						fillOpacity="1"
						d="M0,288L6.2,250.7C12.3,213,25,139,37,122.7C49.2,107,62,149,74,160C86.2,171,98,149,111,133.3C123.1,117,135,107,148,138.7C160,171,172,245,185,245.3C196.9,245,209,171,222,165.3C233.8,160,246,224,258,224C270.8,224,283,160,295,149.3C307.7,139,320,181,332,192C344.6,203,357,181,369,144C381.5,107,394,53,406,42.7C418.5,32,431,64,443,90.7C455.4,117,468,139,480,165.3C492.3,192,505,224,517,202.7C529.2,181,542,107,554,64C566.2,21,578,11,591,26.7C603.1,43,615,85,628,96C640,107,652,85,665,96C676.9,107,689,149,702,160C713.8,171,726,149,738,122.7C750.8,96,763,64,775,96C787.7,128,800,224,812,266.7C824.6,309,837,299,849,250.7C861.5,203,874,117,886,96C898.5,75,911,117,923,112C935.4,107,948,53,960,58.7C972.3,64,985,128,997,144C1009.2,160,1022,128,1034,138.7C1046.2,149,1058,203,1071,224C1083.1,245,1095,235,1108,197.3C1120,160,1132,96,1145,85.3C1156.9,75,1169,117,1182,149.3C1193.8,181,1206,203,1218,181.3C1230.8,160,1243,96,1255,101.3C1267.7,107,1280,181,1292,208C1304.6,235,1317,213,1329,170.7C1341.5,128,1354,64,1366,80C1378.5,96,1391,192,1403,213.3C1415.4,235,1428,181,1434,154.7L1440,128L1440,0L1433.8,0C1427.7,0,1415,0,1403,0C1390.8,0,1378,0,1366,0C1353.8,0,1342,0,1329,0C1316.9,0,1305,0,1292,0C1280,0,1268,0,1255,0C1243.1,0,1231,0,1218,0C1206.2,0,1194,0,1182,0C1169.2,0,1157,0,1145,0C1132.3,0,1120,0,1108,0C1095.4,0,1083,0,1071,0C1058.5,0,1046,0,1034,0C1021.5,0,1009,0,997,0C984.6,0,972,0,960,0C947.7,0,935,0,923,0C910.8,0,898,0,886,0C873.8,0,862,0,849,0C836.9,0,825,0,812,0C800,0,788,0,775,0C763.1,0,751,0,738,0C726.2,0,714,0,702,0C689.2,0,677,0,665,0C652.3,0,640,0,628,0C615.4,0,603,0,591,0C578.5,0,566,0,554,0C541.5,0,529,0,517,0C504.6,0,492,0,480,0C467.7,0,455,0,443,0C430.8,0,418,0,406,0C393.8,0,382,0,369,0C356.9,0,345,0,332,0C320,0,308,0,295,0C283.1,0,271,0,258,0C246.2,0,234,0,222,0C209.2,0,197,0,185,0C172.3,0,160,0,148,0C135.4,0,123,0,111,0C98.5,0,86,0,74,0C61.5,0,49,0,37,0C24.6,0,12,0,6,0L0,0Z"></path>
				</svg>
			</div>
			<div className="container">
				<div className="row justify-content-start">
					<div className="col-md-6">
						<div className="n-box2 p-5 pb-3 font-bold">
							<h3 data-aos="fade-left">May I introduce myself?</h3>
							<br />
							<p data-aos="fade-right">
								I'm just a simple person who wanted to challenge himself and
								decided to shift his career path in the latter half of 2021 and
								since then I have been practicing hard in order to become a good
								software developer. Frankly, programming is yet one of the
								hardest challenges that I have met so far in life. I must admit
								that I sometimes struggle and everything feels out of place but
								other times, I find programming, algorithm, or just coding in
								general to be fun, enjoyable, and addicting.
							</p>
							<p data-aos="fade-up">How mysterious?</p>
						</div>
					</div>
				</div>
				<div className="  row pt-5 justify-content-center">
					<div className="col-md-4">
						<div data-aos="fade-up" className=" overflow-hidden rounded">
							<img
								className=""
								src={doodle}
								alt=""
								height="400"
								className="w-100"
							/>
						</div>
					</div>
				</div>
				<div className="row pt-5 justify-content-end">
					<div className="col-md-6">
						<div className="n-box2 p-5 font-bold">
							<h3 data-aos="fade-left">A bit about Javascript.</h3>
							<br />
							<p data-aos="fade-left">
								Javascript is a dynamic language made famous by its easy to
								learn syntax . It is a fully featured language equipped for
								building websites. It is flexible enough that both front end and
								the back end server of an entire web app or mobile app can be
								written solely in Javascript. It uses just-in-time interpreter
								to compute the code. In other words, all codes convert to
								machine codes in parallel and then immediately executed, this
								all happens on a single thread of CPU. Currently it's one of the
								most well known and loved high-level programming language.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="devstack container n-box2 my-5 py-5 ">
				<div className="text-center">
					<h3 className="font-bold text-center ">My Development Stack</h3>
					<div className="rounded container ">
						<img
							className=" rounded my-3 image-fluid w-100 max-w-650 "
							src={developerImage}
							alt="developer"
						/>
					</div>
				</div>
				<div className="row">
					<div
						data-aos="fade-left"
						className="col-md-4 ps-5 font-bold text-start">
						<h4 className="font-bold">Front-End</h4>
						<hr />
						<p>HTML</p>
						<p>Javascript</p>
						<p>Bootstrap</p>
						<p>React</p>
					</div>
					<div data-aos="fade-up" className="col-md-4 font-bold text-center">
						<h4 className="font-bold">UI/Styling</h4>
						<hr />
						<p>Bootstrap</p>
						<p>CSS</p>
						<p>Material UI</p>
						<p>Figma</p>
					</div>
					<div
						data-aos="fade-right"
						className="col-md-4 pe-5 font-bold text-end">
						<h4 className="font-bold">Back-End / Database</h4>
						<hr />
						<p>NodeJS</p>
						<p>ExpressJS</p>
						<p>MySQL</p>
						<p>MongoDB</p>
					</div>
				</div>
			</div>
			<div className="section">
				<h3 className="font-bold  mt-5 text-center">Who is Pongsathorn?</h3>
				<div
					className="pongsathorn flex-with-center"
					style={{ backgroundImage: `url('./blob.svg')` }}>
					<div className="pt-5">
						<h3 className="text-white text-center">Hello world!</h3>
						<hr />
						<p>
							<pre>
								{JSON.stringify(
									{
										name: "Pongsathorn Tiranun",
										from: "Thailand",
										dob: "07/08/1991",
										gender: "male",
									},
									null,
									2
								)}
							</pre>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
