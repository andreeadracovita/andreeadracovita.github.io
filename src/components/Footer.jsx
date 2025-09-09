export default function Footer() {
	const currentYear = (new Date()).getFullYear();

	return (
		<>
			<section id="footer">
				<footer className="row row-cols-1 row-cols-sm-2 row-cols-md-12 my-5 px-5">
					<div className="col-3">
						<a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
							<img src="src/assets/images/logo-black.png" height="40" />
						</a>
						<p className="text-body-secondary open-sans">© Andreea Racovita {currentYear}</p>
					</div>
					<div className="col-9 text-end">
						<h5 className="text-uppercase archivo-black-regular mb-2">Contact</h5>
						<p className="fw-bold text-uppercase">Email</p>
						<p className="open-sans mb-1">andreea.d.racovita@gmail.com</p>
						<p className="fw-bold text-uppercase">Phone</p>
						<p className="open-sans mb-3">+40 755 246 451</p>
						<a href="https://github.com/andreeadracovita">
							<img src="src/assets/images/github.svg" height="30px" className="me-3" />
						</a>
						<a href="https://www.linkedin.com/in/andreearacovita/">
							<img src="src/assets/images/linkedin.svg" height="30px" />
						</a>
					</div>
				</footer>
			</section>
		</>
	);
}