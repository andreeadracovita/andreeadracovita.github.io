export default function Hero() {
	
	return (
		<section id="hero">
			<div className="row flex-lg-row align-items-center mx-5">
				<div id="hero-text" className="col-lg-6">
					<h1 className="display-6 fw-bold text-body-emphasis lh-1 my-4 text-uppercase archivo-black-regular">Andreea Racovita</h1>
					<p className="lead text-uppercase mb-5 open-sans">Web software developer</p>
					<a href="#footer" type="button" className="btn btn-dark me-md-2 pill-button black-bg-color open-sans mb-5">Let's talk</a>
				</div>
				<div className="col-12 col-lg-6 d-flex justify-content-center">
					{/*<img src="src/assets/images/woman-portrait-transparent.png" className="d-block mx-lg-auto img-fluid grayscale-img" alt="woman-portrait" height="460" width="421" loading="lazy">*/}
				</div>
			</div>
		</section>
	);
}