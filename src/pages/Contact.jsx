import React from "react";
import Header from "../components/Header";
function Contact() {
	return (
		<div>
			<Header />
			<div className="container contact mt-0">
				<div className="row pt-5">
					<div className="col-md-6 p-5 py-0">
						<img src="./contact.svg" alt="" />
					</div>
					<div className="col-md-6">
						<div className="contact-form m-2 p-5 pb-3 n-box2">
							<h3 className="font-bold mb-3">Contact Me</h3>
							<p>Name : Pongsathorn Tiranun</p>
							<p>Telephone no.: (+66)90-996-9848 </p>
							<p>
								Preferable Communication Protocol: English language, Thai
								language, Coding language{" "}
							</p>
							<p> Email : pongzthor@gmail.com </p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
