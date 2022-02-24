import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import "./stylesheets/home.css";
import "./stylesheets/header-footer.css";
import "./stylesheets/carousel.css";
import "./stylesheets/projects-courses.css";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
	duration: 900,
});

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/courses" element={<Courses />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</BrowserRouter>

			<Footer />
		</div>
	);
}

export default App;
