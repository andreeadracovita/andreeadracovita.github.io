import { FaLink } from "react-icons/fa";

import Tag from "./Tag";

export default function Projects() {
	
	return (
		<section id="projects">
			<div className="my-5">
				<div className="anchor-parent">
					<h2 className="fw-bold text-uppercase archivo-black-regular subsection-header z-1 text-start">Projects</h2>
					<Tag />
				</div>

				<div className="col-12 anchor-parent">
					<div className="grey-card p-4 mb-3">
						<p className="fw-bold fs-5 sharpie-highlight d-inline-block">Lodge - Travel Booking Web App / 2025</p>
						<ul className="ps-4">
							<li>Plan, design and develop an Accommodation Booking web app which enables property owners to list their places and users to create bookings</li>
							<li>Frontend developed with Node.js and React.js</li>
							<li>Backend REST API developed with Node.js and Express.js</li>
							<li>Data is stored in a PostgreSQL database</li>
						</ul>
						<a href="https://github.com/andreeadracovita/project-lodge" type="button" className="btn btn-dark me-md-2 pill-button black-bg-color">Front-end repo</a>
						<a href="https://github.com/andreeadracovita/project-lodge-db-rest-api" type="button" className="btn btn-outline-dark pill-button">Back-end repo</a>

						<a href="https://project-lodge.onrender.com" target="_blank">
							<div className="position-relative">
								<img src="lodge.png" className="w-100 mt-2 img-border" />
								<div className="position-absolute link-icon"><FaLink /></div>
							</div>
						</a>
					</div>

					<div className="grey-card p-4 mb-3">
						<p className="fw-bold fs-5 sharpie-highlight d-inline-block">Memento - learning side hustle / 2023</p>
						<ul className="ps-4">
							<li>A collection of fundamental software development knowledge snippets</li>
							<li>Good for note taking, interview prep and general purpose</li>
							<li>Retro design</li>
							<li>React.js</li>
						</ul>

						<a href="https://andreeadracovita.github.io/memento/" target="_blank">
							<div className="position-relative">
								<img src="memento.png" className="w-100 mt-2 img-border" />
								<div className="position-absolute link-icon"><FaLink /></div>
							</div>
						</a>
					</div>

					<div className="grey-card p-4">
						<p className="fw-bold fs-5 sharpie-highlight d-inline-block">eBanking Fullstack Web App / 2023</p>
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