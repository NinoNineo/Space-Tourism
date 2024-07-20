import { NavLink } from "react-router-dom"
import "./Header.css"
import logo from "../../assets/shared/logo.svg"
function Header() {
    return (
        <>
            <header className="flex">
                <NavLink to="/"><img src={logo} alt="logo" /></NavLink>
                <nav>
                    <div className="line"></div>
                    <ul className="flex nav-text">
                        <li><NavLink to="/" className={({ isActive }) => isActive ? "active-header nav" : "nav"
                        }><span>00</span>HOME</NavLink></li>
                        <li><NavLink to="/destination" className={({ isActive }) => isActive ? "active-header nav" : "nav"
                        }><span>01</span>DESTINATION</NavLink></li>
                        <li><NavLink to="/crew" className={({ isActive }) => isActive ? "active-header nav" : "nav"
                        }><span>02</span>CREW</NavLink></li>
                        <li><NavLink to="/technology" className={({ isActive }) => isActive ? "active-header nav" : "nav"
                        }><span>03</span>TECHNOLOGY</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Header