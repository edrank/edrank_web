import './Navbar.scss';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<div className='navbar-main'>
			<div className='navbar-main-burger-menu'>
				<i className='fa-solid fa-bars'></i>
			</div>
			<div className='navbar-main-logo'>EDRANK</div>
			<div className='navbar-main-user-menu'>
				<Link to='/profile'>
					<i className='fa-solid fa-circle-user'></i>
				</Link>
				&nbsp; &nbsp; &nbsp;
				<i className='fa-solid fa-ellipsis-vertical'></i>
			</div>
		</div>
	);
}

export default Navbar;
