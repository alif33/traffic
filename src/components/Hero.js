import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <div className="hero-section">
            <div className="box w-50">
                <div className="form-section mt-3">
                    <form>
                        <h3 className="box-title text-center mt-3">Traffic information</h3>
                        <p className="py-3">Here you will find traffic information about public transport in Western Sweden. You will also find tips on how to travel when your journey isn't going as planned.</p>
                        <hr/>
                        <div className="mb-4">
                            <h5 className="input-label">Which line do you want traffic information about?</h5>
                            <p>The search result will be updated immediately when you change the filter.</p>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="E.g. Svart express, X1 or 100"
                            />
                        </div>
                        <div className="mb-4">
                            <h5 className="input-label">Which municipality are you travelling in?</h5>
                            <input 
                                type="text" 
                                className="form-control"
                                placeholder="E.g. Gothenburg, Skövde or Lerum" 
                            />
                        </div>

                        <div className="mb-4">
                            <h5 className="input-label">Mode of transport</h5>
                            <div className="d-flex flex-row justify-content-between">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" htmlFor="exampleCheck1">Tram</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" htmlFor="exampleCheck1">Bus</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" htmlFor="exampleCheck1">Train</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" htmlFor="exampleCheck1">Boat</label>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h5 className="input-label">Type of traffic disruption</h5>
                            <div className="d-flex flex-row justify-content-between">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Ongoing traffic disruptions
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Upcoming traffic changes
                                    </label>
                                </div>
                            </div>
                        </div>
                    </form>
                {/* </div> */}
                </div>
            </div>
            <div id="mobile-menu" className="mobile-nav-menu">
                <ul className="mobile-nav">
                    <li><Link to="/traffic-information">Traffic Information</Link></li>
                    <li><Link>Maps</Link></li>
                </ul>
            </div>
            <div className="parallax"></div>
        </div>
    );
}