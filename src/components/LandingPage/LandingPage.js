import React, { Component } from 'react';

import './LandingPage.scss'

class LandingPage extends Component {
    render() {
        return (
            <div>
                <div className="landing-image">
                    <img src="https://sarajevo.travel/assets/photos/texts/original/aktivnosti-na-otvorenom-u-gradu-i-okolini-sarajeva-1497879541.jpg" alt='' />
                </div>
                <div className="landing-text">
                    <h1 className="title">WELCOME TO...</h1>
                </div>
            </div>
        );
    }
}

export default LandingPage;