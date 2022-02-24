import React from "react";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";

function Footer() {
	return (
		<div>
			<div className="footer">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path
						fill="#273036"
						fillOpacity="1"
						d="M0,128L30,122.7C60,117,120,107,180,138.7C240,171,300,245,360,240C420,235,480,149,540,144C600,139,660,213,720,250.7C780,288,840,288,900,288C960,288,1020,288,1080,288C1140,288,1200,288,1260,277.3C1320,267,1380,245,1410,234.7L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
				</svg>
				<div className="row justify-content-center content">
					<div className="col-md-6 ">
						<div className="">
							<p>Developed by Pongsathorn Tiranun </p>
							<hr />
							<div className="d-flex justify-content-between">
								<a target="_blank" href="https://github.com/Moopz-Dev">
									<FaGithub className="footer-icon" />
								</a>
								<a
									target="_blank"
									href="https://www.linkedin.com/in/pongsathorn-tiranun-a5ba6a186">
									<FaLinkedin className="footer-icon" />
								</a>

								<a href="mailto:pongzthor@gmail.com">
									<FaMailBulk className="footer-icon" />
								</a>
							</div>
							<hr />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
