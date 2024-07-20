import mars from "../../assets/destination/image-mars.png"
function Mars() {
    return (
        <>
            <div className="container flex">
                <div className="image-container planet">
                    <img src={mars} alt="mars-image planet" />
                </div>
                <div className="text-container">
                    <h1 className="heading-1">MARS</h1>
                    <p className="body-text">Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!</p>
                    <div className="hr"></div>
                    <div className="flex">
                        <div className="left">
                            <h5 className="subheading-2 grey">AVG. DISTANCE</h5>
                            <h3 className="subheading-1 white">225 MIL. km</h3>
                        </div>
                        <div className="right">
                            <h5 className="subheading-2 grey">Est. travel time</h5>
                            <h3 className="subheading-1 white">9 months</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Mars