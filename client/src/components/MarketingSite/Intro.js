import React from "react";
import { Link } from 'react-router-dom';

const Intro = () => {
    let padding = { paddingBottom: "30px" }

    return (
        <div className="container mx-auto">
            <div className="row">
                <div className="col-md-1" />
                <div className="col-md-10">
                    <h1>Title of Site</h1>

                    <p>(Insert what you would like on landing page here)</p>

                    <Link className="get-started-now" to="/sign-up"><button type="button" id="first-button" className="btn btn-dark">Get Started Now</button></Link>
                    <div className="col-md-1" style={padding} />
                </div>
            </div>
        </div>

    )
}

export default Intro;