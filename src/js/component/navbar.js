import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img
					src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-0.png"
					alt="logo de Starwars"
				/>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Favorite</button>
				</Link>
			</div>
		</nav>
	);
};
