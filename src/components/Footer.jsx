export default function Footer() {

	return (
		<>
			<section id="footer">
				<footer className="row row-cols-1 row-cols-sm-2 row-cols-md-12 my-2 px-5">
					<div className="col-6">
						<h2 className="text-uppercase archivo-black-regular mb-5 display-5">
							Andreea
							<br />
							Racovita
						</h2>
						<p className="mb-1">andreea.d.racovita@gmail.com</p>
						<a href="https://andreeadracovita.github.io/" target="_blank">
							<p className="mb-1">andreeadracovita.github.io</p>
						</a>
						<p className="mb-5">+40 755 246 451</p>

						<a href="https://github.com/andreeadracovita" target="_blank">
							<img src="github.svg" height="30px" className="me-3" />
						</a>
						<a href="https://www.linkedin.com/in/andreearacovita/" target="_blank">
							<img src="linkedin.svg" height="30px" />
						</a>
					</div>
					<div className="col-6 d-flex align-items-end justify-content-end">
						<a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
							<img src="logo-black.png" height="60" />
						</a>
					</div>
				</footer>
			</section>
		</>
	);
}