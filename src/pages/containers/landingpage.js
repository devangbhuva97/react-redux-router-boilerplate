import React, { Component } from 'react';
import { LandingPageComponent } from 'pages/components/landingpage';

export default class LandingPage extends Component {
    render() {
        return <LandingPageComponent {...this.props} />
    }
}