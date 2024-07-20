import europa from "../../assets/destination/image-europa.png"
function Europa() {
    return (
        <>
            <div className="container flex">
                <div className="image-container  planet">
                    <img src={europa} alt="europa-image" />
                </div>
                <div className="text-container">
                    <h1 className="heading-1">europa</h1>
                    <p className="body-text">The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
                    <div className="hr"></div>
                    <div className="flex">
                        <div className="left">
                            <h5 className="subheading-2 grey">AVG. DISTANCE</h5>
                            <h3 className="subheading-1 white">628 MIL. km</h3>
                        </div>
                        <div className="right">
                            <h5 className="subheading-2 grey">Est. travel time</h5>
                            <h3 className="subheading-1 white">3 years</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Europa