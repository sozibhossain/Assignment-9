import React from 'react';
import reacticon from '../../image/reacticon.png';
import './About.css'

const About = () => {
    return (
        <div>
            <div className="about-area">
            <h1>ABOUT US</h1>
            <p>Home / About us</p>
            </div>

            <div>
                <div className="feature-area">
                    <h1>TECHEDU FEATURE</h1>
                </div>
                <div className="d-flex feature">
                    <div className="col-lg-4">
                        <div>
                            <div>
                                <img src={reacticon} alt="" style={{width: "100px"}}/>
                            </div>
                            <h5>Responsive Design</h5>
                            <p>Techedu is supper responsive & work perfectly in all devices.</p>
                        </div>
                        <div>
                            <h5>Icon Font</h5>
                            <p>It's comes with most popular ionicons font.</p>
                        </div>
                        <div>
                            <h5>Clean Markup</h5>
                            <p>We developed it followed by W3C Markup.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div>
                            <div>
                                <img src={reacticon} alt="" style={{width: "100px"}}/>
                            </div>
                            <h5>User Friendly</h5>
                            <p>Techedu easy to use for any technical & nontechnical People.</p>
                        </div>
                        <div>
                            <h5>Elementor Page Builder</h5>
                            <p>600 Google Fonts. You can change font for all elements easily.</p>
                        </div>
                        <div>
                            <h5>Free Updates</h5>
                            <p>Purchase once & get life-time free updates.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div>
                            <div>
                                <img src={reacticon} alt="" style={{width: "100px"}}/>
                            </div>
                            <h5>Creative Design</h5>
                            <p>It's comes with creative & smart design layout.</p>
                        </div>
                        <div>
                            <h5>Contact Form 7</h5>
                            <p>It's comes with most popular ionicons font.</p>
                        </div>
                        <div>
                            <h5>Real Support</h5>
                            <p>We provide 7 days a week one by one real support.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    );
};

export default About;