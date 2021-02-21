import { NavLink } from "react-router-dom";

const Header = (props) => {
	return (
		<nav className='navbar'>
			<h1 className='logo'>Wagging Tails</h1>
			<ul className='nav-list'>
				<li className='nav-items'>
					<NavLink
						className='nav-link'
						activeClassName='active'
						to='/'
						exact={true}>
						Home
					</NavLink>
				</li>
				<li className='nav-items'>
					<NavLink className='nav-link' activeClassName='active' to='/about'>
						About
					</NavLink>
				</li>
				<li className='nav-items'>
					<NavLink className='nav-link' activeClassName='active' to='/donate'>
						Donate
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Header;
