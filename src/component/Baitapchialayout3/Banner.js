import React, { Component } from 'react';

export default class Banner extends Component {
    render() {
        return (
            <div className="card" style={{ width: '100%', height: '100%' }}>
                <h1>A Warm Welcome</h1>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>

        );
    }
}
