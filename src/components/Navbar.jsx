export default function Navbar() {
	// const location = useLocation();

	// Check if the URL contains '#something'
	// const hasHash = location.hash.includes('#something');
	
	return (
		<div className="black-bg-color sticky-top">
			<nav id="navbar" className="container col-xl-8 black-bg-color navbar d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 px-5">
				<div className="col-md-3 mb-2 mb-md-0">
					<a href="#" className="d-inline-flex link-body-emphasis text-decoration-none">
						<img src="logo-yellow.png" height="40" />
					</a>
				</div>

				<ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
					<li>
						<a href="#about" className="nav-link px-2 text-uppercase nav-override">About</a>
					</li>
					<li>
						<a href="#experience" className="nav-link px-2 text-uppercase nav-override">Professional</a>
					</li>
					<li>
						<a href="#projects" className="nav-link px-2 text-uppercase nav-override">Projects</a>
					</li>
					<li>
						<a href="#footer" className="nav-link px-2 text-uppercase nav-override">Contact</a>
					</li>
				</ul>

				<div className="col-md-3 text-end d-none d-lg-block">
					<a href="#footer" type="button" className="btn btn-outline-light pill-button">Let's talk</a>
				</div>
			</nav>
		</div>
	);
}