import SkillsList from "./SkillsList";
import Tag from "./Tag";

export default function Experience() {

	const adobeSkills = ["TypeScript", "C++", "Node.js", "Web Components", "Git", "Jira", "VS Code", "Cursor", "MacOS"];
	const ubisoftSkills = ["C++", "Vulkan"];
	
	return (
		<section id="experience">
			<div className="anchor-parent">
				<h2 className="fw-bold text-uppercase archivo-black-regular z-1 subsection-header">Experience</h2>
				<Tag />
			</div>

			<div>
				<div className="timeline px-4">
					<div className="mb-3">
						<div className="anchor-parent">
							<div className="timeline-dot"></div>
							<p className="fw-bold fs-5 relative-title">Software Development Engineer / 2021 - Present</p>
						</div>
						<p className="open-sans mb-1">Adobe Systems / Bucharest</p>
						<ul>
							<li>Lead development of multiple typography features on desktop web, iOS and Android devices using TypeScript, C++ in a Node.js environment</li>
							<li>Gain solid soft skills: project management, organisational and communication</li>
							<li>Maintain code base integrity through unit and integration testing, code reviews and bug fixing.</li>
						</ul>
						<SkillsList skills={adobeSkills} />
					</div>
					<div>
						<div className="anchor-parent">
							<div className="timeline-dot"></div>
							<p className="fw-bold fs-5 relative-title">Engine Programmer / 2018 - 2021</p>
						</div>
						<p className="open-sans mb-1">Ubisoft / Bucharest</p>
						<ul>
							<li>Develop and improve rendering features for improved visual results and fast processing.</li>
							<li>Mentor students during the development of a game, leading to successful development and great teamwork experience.</li>
						</ul>
						<SkillsList skills={ubisoftSkills} />
					</div>
				</div>
			</div>
		</section>
	);
}