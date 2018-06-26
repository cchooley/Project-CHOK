import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <div>
                <h1>About</h1>
                <p>Bettership is an app that does things.  It helps students and is super great. </p>
                <div>
                <h2>Sponsor Companies</h2>
                <img  src='./assets/art-museum.jpg' alt='Art Museum' />
                <img  src='./assets/Bp-logo.jpg' alt='BP' />
                <img  src='./assets/fb-logo.png' alt='FB' />
                <img  src='./assets/hospital.jpg' alt='Childrens Hospital' />
                <img  src='./assets/red-cross.png' alt='Red Cross' />
                </div>
            </div>
        );
    }
}