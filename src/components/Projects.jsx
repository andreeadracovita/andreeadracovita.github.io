import { FiArrowUpRight } from "react-icons/fi";

import Tag from "./Tag";

export default function Projects() {
	
	return (
		<section id="projects">
			<div className="my-5">
				<div id="lodge" className="anchor-parent">
					<h2 className="fw-bold text-uppercase archivo-black-regular subsection-header z-1 text-start">Projects</h2>
					<Tag />
				</div>

				<div className="anchor-parent">
					<div className="grey-card p-4 mb-3">
						<p className="fw-bold fs-5 sharpie-highlight d-inline-block">Lodge - Travel Booking Web App</p>
						<ul className="ps-4">
							<li><span className="sharpie-highlight">Plan, design, develop & deploy</span> an Accommodation Booking web app</li>
							<li>Frontend developed with <span className="sharpie-highlight">Node.js</span> and <span className="sharpie-highlight">React.js</span></li>
							<li>Backend REST API developed with <span className="sharpie-highlight">Node.js</span> and <span className="sharpie-highlight">Express.js</span></li>
							<li>Data storage in <span className="sharpie-highlight">PostgreSQL</span> database</li>
						</ul>
						<div className="mb-3">
							<a href="https://github.com/andreeadracovita/project-lodge" target="_blank" type="button" className="btn btn-dark me-md-2 pill-button black-bg-color">Front-end repo</a>
							<a href="https://github.com/andreeadracovita/project-lodge-db-rest-api" target="_blank" type="button" className="btn btn-outline-dark pill-button">Back-end repo</a>
						</div>

						<a href="https://project-lodge.onrender.com" target="_blank">
							<div className="w-75 position-relative hovered-layer">
								<img src="lodge.png" className="w-100 mt-2 img-border" />
								<div className="position-absolute link-icon">
									<span className="ms-2 redirect"><FiArrowUpRight size="36" /></span>
								</div>
							</div>
						</a>
					</div>

					<div className="grey-card p-4 mb-3">
						<p className="fw-bold fs-5 sharpie-highlight d-inline-block">Memento - learning side hustle</p>
						<ul className="ps-4">
							<li>A collection of fundamental software development knowledge snippets</li>
							<li>Good for note taking, interview prep and general purpose</li>
							<li>Retro design</li>
							<li><span className="sharpie-highlight">React.js</span></li>
						</ul>

						<div className="mb-3">
							<a href="https://github.com/andreeadracovita/memento" target="_blank" type="button" className="btn btn-dark pill-button black-bg-color">Repo</a>
						</div>

						<a href="https://andreeadracovita.github.io/memento/" target="_blank">
							<div className="w-75 position-relative hovered-layer">
								<img src="memento.png" className="w-100 mt-2 img-border" />
								<div className="position-absolute link-icon">
									<span className="ms-2 redirect"><FiArrowUpRight size="36" /></span>
								</div>
							</div>
						</a>
					</div>

					<div className="grey-card p-4">
						<p className="fw-bold fs-5 sharpie-highlight d-inline-block">eBanking Fullstack Web App</p>
						<ul className="ps-4">
							<li>Plan, design and develop <span className="sharpie-highlight">Java Fullstack Application for eBanking</span> operations</li>
							<li>REST API with <span className="sharpie-highlight">Java, Spring Framework and Hibernate</span></li>
							<li>Frontend developed with <span className="sharpie-highlight">Node.js</span> and <span className="sharpie-highlight">React.js</span></li>
						</ul>
						<a href="https://github.com/andreeadracovita/ebanking-react-frontend" target="_blank" type="button" className="btn btn-dark me-md-2 pill-button black-bg-color">Front-end repo</a>
						<a href="https://github.com/andreeadracovita/ebanking-rest-api" target="_blank" type="button" className="btn btn-outline-dark pill-button">REST API repo</a>
					</div>
				</div>
			</div>
		</section>
	);
}