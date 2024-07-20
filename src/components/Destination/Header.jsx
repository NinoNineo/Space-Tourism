import { NavLink } from "react-router-dom"
function DestinationHeader() {
    return (
        <>
            <header className="destination-header">
                <nav>
                    <ul className="flex nav-text dest-header">
                        <li><NavLink to="moon" className={({ isActive }) => isActive ? "active-header nav" : "nav"
                        }>MOON</NavLink></li>
                        <li><NavLink to="mars" className={({ isActive }) => isActive ? "active-header nav" : "nav"
                        }>MARS</NavLink></li>
                        <li><NavLink to="europa" className={({ isActive }) => isActive ? "active-header nav" : "nav"
                        }>EUROPA</NavLink></li>
                        <li><NavLink to="titan" className={({ isActive }) => isActive ? "active-header nav" : "nav"
                        }>TITAN</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default DestinationHeader