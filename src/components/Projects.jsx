import { FaLink } from "react-icons/fa";

export default function Projects() {
	
	return (
		<section id="projects">
			<div className="row my-5">
				<div className="col-lg-2 anchor-parent d-flex align-items-center">
					<h2 className="fw-bold text-uppercase archivo-black-regular subsection-header z-1 text-start">Projects</h2>
					<div className="yellow-tag-accent"></div>
				</div>
				<div className="d-none d-lg-block col-1"></div>
				<div className="col-12 col-lg-9 anchor-parent">
					<div className="grey-card p-4 mb-3">
						<p className="fw-bold fs-5">Lodge - Accommodation Booking Web App / 2025</p>
						<ul className="ps-4">
							<li>Plan, design and develop an Accommodation Booking web app which enables property owners to list their places and users to create bookings</li>
							<li>Frontend developed with Node.js and React.js</li>
							<li>Backend REST API developed with Node.js and Express.js</li>
							<li>Data is stored in a PostgreSQL database</li>
						</ul>
						<a href="https://github.com/andreeadracovita/project-lodge" type="button" className="btn btn-outline-dark me-md-2 pill-button">Front-end repo</a>
						<a href="https://github.com/andreeadracovita/project-lodge-db-rest-api" type="button" className="btn btn-outline-dark pill-button">Back-end repo</a>

						<a href="https://project-lodge.onrender.com" target="_blank">
							<div className="position-relative">
								<img src="lodge.png" className="w-100 mt-2" />
								<div className="position-absolute link-icon"><FaLink /></div>
							</div>
						</a>
					</div>

					<div className="grey-card p-4">
						<p className="fw-bold fs-5">eBanking Fullstack Web App / 2023</p>
						<ul className="ps-4">
							<li>Plan, design and develop Java Fullstack Application for eBanking operations</li>
							<li>Development of the REST API with Java, Spring Framework and Hibernate</li>
							<li>Frontend developed with Node.js and React.js</li>
						</ul>
						<a href="https://github.com/andreeadracovita/ebanking-react-frontend" type="button" className="btn btn-dark me-md-2 pill-button black-bg-color">Front-end repo</a>
						<a href="https://github.com/andreeadracovita/ebanking-rest-api" type="button" className="btn btn-outline-dark pill-button">REST API repo</a>
					</div>
				</div>
			</div>
		</section>
	);
}