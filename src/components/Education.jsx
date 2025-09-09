export default function Education() {
	
	return (
		<section id="education">
			<div className="row">
				<div className="col-lg-2">
					<h2 className="fw-bold text-uppercase archivo-black-regular subsection-header">Education</h2>
				</div>
				<div className="d-none d-lg-block col-1"></div>
				<div className="col-12 col-lg-9 anchor-parent d-flex align-items-center">
					<div className="timeline px-4">
						<div className="mb-5">
							<div className="anchor-parent">
								<div id="edu-first" className="timeline-dot"></div>
								<p className="fw-bold fs-5 subsection-title">M.S. Computer Graphics, Multimedia & Virtual Reality / 2016 - 2018</p>
							</div>
							<p className="open-sans-light">University Politehnica of Bucharest</p>
						</div>
						<div>
							<div className="anchor-parent">
								<div id="edu-second" className="timeline-dot"></div>
									<p className="fw-bold fs-5">B.S. Mathematics and Computer Science / 2013 - 2016</p>
							</div>
							<p className="open-sans-light">University of Bucharest</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}