import React from "react";
import Header from "../components/Header";
import { GiGlobe } from "react-icons/gi";
import projectsData from "./Project";

function Projects() {
	return (
		<div>
			<Header />
			<div className="container projects-intro">
				<div className="row flex-with-center mt-5">
					<div className="col-md-6 p-3 n-box2">
						<div className="text-center">
							<h3 className="font-bold">Projects</h3>
							<p className="text-start">
								Rome is not built in a day. So does character and specialty.
								Idea must be driven into practice with patience, vigor, and
								discipline so that it can actuate.
							</p>
							<button className="primary-button w-75 mb-3  text-center">
								Get started
							</button>
						</div>
					</div>
					<div className="col-md-6 position-relative">
						<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
							<path
								fill="#0F62FE"
								d="M44.8,-74.5C58.9,-69.5,71.8,-59.2,80.8,-45.9C89.8,-32.6,94.9,-16.3,93.5,-0.8C92.1,14.7,84.2,29.4,74.7,41.7C65.1,54,53.9,63.9,41.1,71.8C28.4,79.8,14.2,85.8,-0.8,87.2C-15.9,88.7,-31.7,85.6,-45.8,78.4C-59.9,71.2,-72.2,60,-80.4,46.3C-88.5,32.5,-92.6,16.3,-91.7,0.5C-90.8,-15.3,-85.1,-30.5,-76.8,-44C-68.4,-57.5,-57.6,-69.3,-44.4,-74.8C-31.2,-80.3,-15.6,-79.6,-0.1,-79.4C15.4,-79.2,30.7,-79.5,44.8,-74.5Z"
								transform="translate(100 100)"
							/>
						</svg>
						<GiGlobe
							color="white"
							size={180}
							className="position-absolute top-50 start-50 translate-middle"
						/>
					</div>
				</div>

				<div className="container projects-list">
					<h3 className="font-bold">Take a look at my projects.</h3>
					<hr />
					<div className="container m-auto">
						<div className="row">
							{projectsData.map((item, index) => (
								<div key={index} className="col-md-4 my-3">
									<div className="position-relative project container overflow-hidden">
										<img
											src={item.image}
											className="img-fluid"
											alt="project_image"
										/>
										<div className="project-content">
											<h3>{item.title}</h3>
											<hr />
											<p>{item.description}</p>
											<a
												className="w-75"
												target="_blank"
												rel="noreferrer"
												href={item.link}>
												<button className="primary-button w-100">VIEW</button>
											</a>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Projects;
