import { NavLink } from "react-router-dom"
import ground from "../../assets/home/background-home-desktop.jpg"
function Home() {
    return (
        <>
            <section className="home">
                <img src={ground} alt="" />
            </section>
                <div className="container flex">
                    <div className="text-container">
                        <h6 className="heading-5">SO, YOU WANT TO TRAVEL TO</h6>
                        <h1 className="heading-1">space</h1>
                        <p className="body-text">Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
                    </div>
                    <NavLink to="/destination"><button className="round-btn heading-4">EXPLORE</button></NavLink>
                </div>
            
        </>
    )
}
export default Home