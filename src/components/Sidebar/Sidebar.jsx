import './Sidebar.css';
import { useState } from 'react';
import { SidebarData, SideBarPathIndex } from './SidebarData';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
	let location = useLocation();
	const [selectedOption, setSelectedOption] = useState(
		SideBarPathIndex.collegeAdmin[location.pathname],
	);

	console.log(selectedOption);
	return (
		<div className='sidebar' id='sidebar'>
			{/* <div className='sidebar-option'>
				<div className='sidebar-option-icon'>icon</div>
				<div className='sidebar-option-name'>name</div>
			</div> */}
			{/* map on array of objects in SidebarData according to the tenant */}
			{SidebarData.collegeAdmin.map((item, index) => {
				return (
					<Link
						to={item.path}
						key={index}
						onClick={() => setSelectedOption(index)}
					>
						<div className='sidebar-option'>
							<div className='sidebar-option-icon'>
								<i className={item.icon}></i>
							</div>
							<div className='sidebar-option-name'>{item.option_name}</div>
						</div>
					</Link>
				);
			})}
		</div>
	);
}

export default Sidebar;
