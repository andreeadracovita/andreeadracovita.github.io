export default function Navbar() {
	
	return (
		<section id="navbar">
			<header className="d-flex flex-wrap align-items-center justify-content-center justify-content-between py-3 px-5">
				<div className="col-md-3 mb-2 mb-md-0">
					<a href="#" className="d-inline-flex link-body-emphasis text-decoration-none">
						<img src="logo.png" height="40" />
					</a>
				</div>

				<ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
					<li>
						<a href="#about" className="nav-link px-2 text-uppercase open-sans">About</a>
					</li>
					<li>
						<a href="#experience" className="nav-link px-2 text-uppercase open-sans">Professional</a>
					</li>
					<li>
						<a href="#projects" className="nav-link px-2 text-uppercase open-sans">Projects</a>
					</li>
					<li>
						<a href="#footer" className="nav-link px-2 text-uppercase open-sans">Contact</a>
					</li>
				</ul>

				<div className="col-md-3 text-end d-none d-lg-block">
					<a href="#footer" type="button" className="btn btn-outline-light pill-button open-sans">Let's talk</a>
				</div>
			</header>
		</section>
	);
}