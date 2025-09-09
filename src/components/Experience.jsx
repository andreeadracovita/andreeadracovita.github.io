export default function Experience() {
	
	return (
		<section id="experience">
			<div className="row">
				<div className="col-lg-2 col-8 anchor-parent">
					<h2 className="fw-bold text-uppercase archivo-black-regular text-lg-end subsection-header">Experience</h2>
				</div>
				<div className="d-none d-lg-block col-1"></div>
				<div className="col-12 col-lg-9">
					<div className="timeline px-4">
						<div className="mb-3">
							<div className="anchor-parent">
								<div id="exp-first" className="timeline-dot"></div>
								<p className="fw-bold fs-5">Software Development Engineer / 2021 - Present</p>
							</div>
							<p className="open-sans-light mb-1">Adobe Systems / Bucharest</p>
							<ul className="open-sans">
								<li>Leading the initiative for text decorations on desktop web, iOS and Android devices.</li>
								<li>Onboarding and support.</li>
								<li>Implement core functionality.</li>
								<li>TypeScript / C++ / Node.js / Web Components / Git / Jira</li>
							</ul>
						</div>
						<div>
							<div className="anchor-parent">
								<div id="exp-second" className="timeline-dot"></div>
								<p className="fw-bold fs-5">Engine Programmer / 2018 - 2021</p>
							</div>
							<p className="open-sans-light mb-1">Ubisoft / Bucharest</p>
							<ul className="open-sans">
								<li>Rendering feature for icon generation using C++, Vulkan API and GPU-pipeline for fast, real-time acquisition.</li>
								<li>Mentorship.</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}