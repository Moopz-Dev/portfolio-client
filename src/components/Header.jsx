import React, { useState } from "react";
import { MdMenuOpen, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
function Header() {
	const [showHeader, setShowHeader] = useState(false);

	return (
		<div className="header">
			{showHeader ? (
				<MdClose
					className="menu-icon position-fixed top-0 end-0"
					onClick={() => setShowHeader(prev => !prev)}
				/>
			) : (
				<MdMenuOpen
					className="menu-icon position-fixed top-0 end-0"
					onClick={() => setShowHeader(prev => !prev)}
				/>
			)}

			{/* <ul className={`${showHeader ? "show-header" : "hide-header"} n-box1 `}> */}
			<ul className={`hide-header ${showHeader && "show-header"} n-box1 `}>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/projects">Projects</Link>
				</li>
				<li>
					<Link to="/courses">Courses</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
			</ul>
		</div>
	);
}

export default Header;
