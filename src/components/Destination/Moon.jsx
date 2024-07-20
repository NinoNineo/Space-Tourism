import moon from "../../assets/destination/image-moon.png"
function Moon() {
    return (
        <>
            <div className="container flex">
                <div className="image-container planet">
                    <img src={moon} alt="moon-image" />
                </div>
                <div className="text-container">
                    <h1 className="heading-1">MOON</h1>
                    <p className="body-text">See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                    <div className="hr"></div>
                    <div className="flex">
                        <div className="left">
                            <h5 className="subheading-2 grey">AVG. DISTANCE</h5>
                            <h3 className="subheading-1 white">384,400 km</h3>
                        </div>
                        <div className="right">
                            <h5 className="subheading-2 grey">Est. travel time</h5>
                            <h3 className="subheading-1 white">3 days</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Moon