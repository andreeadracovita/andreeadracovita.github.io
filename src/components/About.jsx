import { FiArrowUpRight } from "react-icons/fi";

import Tag from "./Tag";

export default function About() {
	
	return (
		<section id="about" className="pb-5">
			<div className="anchor-parent">
				<h2 className="fw-bold mb-3 text-uppercase z-1 archivo-black-regular">Hi, I'm Andreea</h2>
				<Tag />
			</div>
			<p>I work as a web software developer, with <span className="sharpie-highlight">fullstack</span> capabilities in various applications, such as:</p>
			<p className="text-center my-3"><span className="sharpie-highlight">content editing, booking, banking and organizing</span></p>
			<p>I am a <span className="sharpie-highlight">creative & visual person</span>, I enjoy to visualise the results of my work, either through <span className="sharpie-highlight">UI, proper functionality or charts & graphs</span>. I see web development as a powerful and quick tool to build any type of application, which can reach anyone, regardless of the device. The web is the language that 70%+ of the global population speaks, unlimited by computing power (if done right), and it is an area to be harnessed and <span className="sharpie-highlight">improve the life quality for all people</span>.</p>
			<p className="mt-3">I currently work at <span className="sharpie-highlight">Adobe Romania</span> on an online app for content creation & editing named Express. My contribution has spanned across typography area (text object interactions, mobile UX, AI generated text effects, etc.) and, most recently, I have started working on layouts and shapes. I have lead multiple initiatives, either solo or in teams, where I especially enjoyed <span className="sharpie-highlight">creating channels of communication</span> to ease the information transfer to stakeholders and all members involved in development. This proactive action drove <span className="sharpie-highlight">transparent development</span>, <span className="sharpie-highlight">promoted visibility into the progress</span> and helped everyone <span className="sharpie-highlight">align and be part of the bigger effort</span>.</p>
			<p className="mt-3">Apart from Adobe, I work on personal projects for the web. The most recent one is</p>
			
			<p className="my-3">
				<a href="#lodge" className="text-redirect d-flex justify-content-center align-items-center">
					<span className="sharpie-highlight">Lodge: React Web App for travel booking</span> <span className="ms-2 redirect"><FiArrowUpRight size="36" />
					</span>
				</a>
			</p>

			<p>It is currently live with some mock locations. It could actually be used for booking, but without payment.</p>
			<p className="mt-3">I enjoy every part of the software creation process, from early prototyping, designing, development, to testing, deliverling and analysing usage data. And what other way to experience it all than building apps from scratch.</p>
			
			<p className="mt-3"><span className="sharpie-highlight">#AppCreator</span> <span className="sharpie-highlight">#BetterLifeForAll</span> <span className="sharpie-highlight">#StrongerTogether</span></p>
		</section>
	);
}