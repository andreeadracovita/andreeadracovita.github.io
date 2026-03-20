import Tag from "./Tag";
import TimelineItem from "./TimelineItem";

export default function Education() {

	const courseFullStackWebDev = ["HTML", "Node.js", "React.js", "Express.js", "CSS", "Canva", "Git"];
	const courseSpringFrameworkJava = ["Spring Boot", "React.js", "REST APIs", "Spring Framework"];
	const courseJava = ["Java"];
	
	return (
		<section id="education">
			<div className="anchor-parent">
				<h2 className="fw-bold text-uppercase archivo-black-regular z-1 subsection-header">Education</h2>
				<Tag />
			</div>
			
			<div className="anchor-parent d-flex align-items-center">
				<div className="timeline px-4">
					<TimelineItem
						title="M.S. Computer Graphics, Multimedia & Virtual Reality / 2016 - 2018"
						subtitle="University Politehnica of Bucharest"
						spacing={true}
					/>
					<TimelineItem
						title="B.S. Mathematics and Computer Science / 2013 - 2016"
						subtitle="University of Bucharest"
						spacing={false}
					/>
				</div>
			</div>

			<div className="mt-5 anchor-parent">
				<h2 className="fw-bold text-uppercase archivo-black-regular z-1 subsection-header">Courses</h2>
				<Tag />
			</div>

			<div className="anchor-parent d-flex align-items-center">
				<div className="timeline px-4">
					<TimelineItem
						title="The Complete Full-Stack Web Development Bootcamp"
						subtitle="Udemy"
						link="https://www.udemy.com/certificate/UC-c133994a-0e7b-473f-b3c1-95f3f27cb7f0"
						spacing={true}
						icon="udemy.png"
						skills={courseFullStackWebDev}
					/>
					<TimelineItem
						title="Master Spring Boot 3 & Spring Framework 6 with Java"
						subtitle="Udemy"
						link="https://www.udemy.com/certificate/UC-dcc63223-35c1-4a73-a5fe-a4ec958bc1b9"
						spacing={true}
						icon="udemy.png"
						skills={courseSpringFrameworkJava}
					/>
					<TimelineItem
						title="Java Programming Masterclass"
						subtitle="Udemy"
						link="https://www.udemy.com/certificate/UC-4be81e19-a528-4f45-b9c9-8950bb57aea5"
						spacing={false}
						icon="udemy.png"
						skills={courseJava}
					/>
				</div>
			</div>
		</section>
	);
}