import React, { Component } from 'react';

export default class Handleevent extends Component {
    HandleClick = () => {
        alert("Hello bạn");
    };
    render() {
        return (
            <div>
                <button onClick={() => {
                    this.HandleClick();
                }}>Click Me</button>
            </div>
        );
    }
}
