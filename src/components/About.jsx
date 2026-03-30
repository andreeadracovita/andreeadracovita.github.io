import { FiArrowUpRight } from "react-icons/fi";

import Tag from "./Tag";

export default function About() {
	
	return (
		<section id="about" className="pb-5">
			<div className="anchor-parent">
				<h2 className="fw-bold mb-3 text-uppercase z-1 archivo-black-regular">Welcome</h2>
				<Tag />
			</div>

			<p className="mt-4 mb-4 text-center"><span className="sharpie-highlight">Anything is achievable when divided into small enough pieces.</span></p>
			<p className="mb-4">With this in mind, <span className="sharpie-highlight">creating structure</span> is what defines me. At work, in my personal projects, generally in life - structure is what fuels processes like a well oiled machine. Structure then leads to transparency, alignment and achievements. As a bonus, it is inherently scalable.</p>
			<p>I work as a web software developer, with <span className="sharpie-highlight">fullstack</span> capabilities in various applications</p>
			<p className="text-center my-4"><span className="sharpie-highlight">content editing, booking, banking and organizing.</span></p>
			<p>I am a <span className="sharpie-highlight">creative & visual person</span>, I enjoy to visualise the results of my work, either through <span className="sharpie-highlight">UI, functionality or charts & graphs</span>. I see web development as a powerful and quick tool to build any type of application, which can reach anyone, regardless of the device. The web is the language that 70%+ of the global population speaks, unlimited by computing power (if done right), and it is an area to be harnessed and <span className="sharpie-highlight">improve the quality of life for all people</span>.</p>
			
			<p className="mt-4"><span className="sharpie-highlight">#AppCreator</span> <span className="sharpie-highlight">#CreatingStructure</span> <span className="sharpie-highlight">#StrongerTogether</span></p>
		</section>
	);
}