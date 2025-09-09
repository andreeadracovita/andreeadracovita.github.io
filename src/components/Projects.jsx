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
						<p className="fw-bold fs-5">Lodge Travel Booking Web App / 2025</p>
						<ul className="open-sans ps-4">
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
							<li>Suspendisse interdum consectetur sagittis.</li>
							<li>Technologies: Typescript, Node.js, React.js, PostgreSQL</li>
						</ul>
						<a href="https://github.com/andreeadracovita/project-lodge" type="button" className="btn btn-dark me-md-2 pill-button black-bg-color">Deployment</a>
						<a href="https://github.com/andreeadracovita/project-lodge" type="button" className="btn btn-outline-dark me-md-2 pill-button">Front-end repo</a>
						<a href="https://github.com/andreeadracovita/project-lodge-db-rest-api" type="button" className="btn btn-outline-dark pill-button">Back-end repo</a>
						</div>
						<div className="grey-card p-4">
						<p className="fw-bold fs-5">eBanking Fullstack Web App / 2023</p>
						<ul className="open-sans ps-4">
							<li>Planning, designing and development of a web application for eBanking operations.</li>
							<li>Technologies: REST API, Java, Spring Framework, Hibernate, JavaScript, React.js, Node.js, AWS</li>
						</ul>
						<a href="https://github.com/andreeadracovita/ebanking-react-frontend" type="button" className="btn btn-dark me-md-2 pill-button black-bg-color">Front-end repo</a>
						<a href="https://github.com/andreeadracovita/ebanking-rest-api" type="button" className="btn btn-outline-dark pill-button">REST API repo</a>
					</div>
				</div>
			</div>
		</section>
	);
}