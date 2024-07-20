import titan from "../../assets/destination/image-titan.png"
function Titan() {
    return (
        <>
            <div className="container flex">
                <div className="image-container planet">
                    <img src={titan} alt="titan-image" />
                </div>
                <div className="text-container">
                    <h1 className="heading-1">MARS</h1>
                    <p className="body-text">The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>
                    <div className="hr"></div>
                    <div className="flex">
                        <div className="left">
                            <h5 className="subheading-2 grey">AVG. DISTANCE</h5>
                            <h3 className="subheading-1 white">1.6 BIL. km</h3>
                        </div>
                        <div className="right">
                            <h5 className="subheading-2 grey">Est. travel time</h5>
                            <h3 className="subheading-1 white">7 years</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Titan