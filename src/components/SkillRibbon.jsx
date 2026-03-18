export default function SkillRibbon() {

	const skills = ["TypeScript", "JavaScript", "React.js", "Node.js", "Java", "Spring", "C++", "Git"];
	
	return (
		<section id="ribbon">
			<div className="d-flex flex-wrap justify-content-evenly black-bg-color px-5" id="skills-ribbon">
			{
				skills.map((skill, index) =>
					<>
						{index > 0 && <span className="text-yellow archivo-black-regular mx-1">/</span>}
						<span className="text-white text-uppercase mb-1">{skill}</span>
					</>
				)
			}
			</div>
		</section>
	);
}