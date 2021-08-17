import React, { Component } from 'react';
import Contentnavigation from './Contentnavigation';
import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation';

export default class Homecomponent extends Component {
    render() {
        let padding = {
            padding: 0,
        };
        return (
            <div className='container-fluid' >


                <div className='row' >
                    <div className='col-12' style={padding}>
                        <Header />

                    </div>

                </div>
                <div className='row' >
                    <div className='col-4' style={padding}>
                        <Navigation />

                    </div>
                    <div className='col-8' style={padding}>
                        <Contentnavigation />

                    </div>
                </div>
                <div className='row'>
                    <div className='col-12' style={padding}>
                        <Footer />

                    </div>

                </div>

            </div>

        );
    }
}
