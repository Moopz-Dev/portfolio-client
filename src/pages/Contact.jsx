import React from "react";
import { MdContactMail } from "react-icons/md";
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
						<div className="contact-form m-2 p-5 n-box2">
							<h3 className="font-bold">Contact Me</h3>
							<input type="text" className="form-control" placeholder="Name" />
							<input type="text" className="form-control" placeholder="Name" />
							<textarea
								className="form-control"
								name=""
								id=""
								cols="30"
								rows={3}
							/>
							<button className=" primary-button w-100 mt-5">SUBMIT</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
