import { NavLink, Outlet } from "react-router-dom"
import ground from "../../assets/destination/background-destination-desktop.jpg"
import DestinationHeader from "../../components/Destination/Header"
function Destination() {
    return (
        <>
        <section className="destination">
            <img src={ground} alt="" />
        </section>
        <h3 className="heading-5 h3-destination"><span>01</span>pick your destination</h3>
        <DestinationHeader/>
        <Outlet/>
        </>
    )
}
export default Destination