import Tag from "./Tag";

export default function About() {
	
	return (
		<section id="about" className="pb-5">
			<div className="anchor-parent">
				<h2 className="fw-bold mb-3 text-uppercase z-1 archivo-black-regular">About me</h2>
				<Tag />
			</div>
			<p>[More humane introduction, not a corporate minion]</p>
			<p className="mb-2">I bring a dynamic blend of methodical thinking, communication and a product-centric mindset. As a Software Engineer, I thrive in a fast-paced environment. I enjoy creating order out of chaos, a skill especially useful in early product stages, and strategically leading development to a robust result.</p>
		</section>
	);
}