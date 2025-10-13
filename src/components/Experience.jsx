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
								<p className="fw-bold fs-5 relative-title">Software Development Engineer / 2021 - Present</p>
							</div>
							<p className="open-sans-light mb-1">Adobe Systems / Bucharest</p>
							<ul>
								<li>Lead development of multiple typography features on desktop web, iOS and Android devices using TypeScript, C++ in a Node.js environment</li>
								<li>Gain solid soft skills: project management, organisational and communication</li>
								<li>Maintain code base integrity through unit and integration testing, code reviews and bug fixing.</li>
								<li>TypeScript / C++ / Node.js / Web Applications / Git / Jira / VS Code / MacOS</li>
							</ul>
						</div>
						<div>
							<div className="anchor-parent">
								<div id="exp-second" className="timeline-dot"></div>
								<p className="fw-bold fs-5 relative-title">Engine Programmer / 2018 - 2021</p>
							</div>
							<p className="open-sans-light mb-1">Ubisoft / Bucharest</p>
							<ul>
								<li>Develop and improve rendering features using C++, Vulkan API and GPU-pipeline, for improved visual results and fast processing.</li>
								<li>Mentor students during the development of a game, leading to successful development and great teamwork experience.</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}